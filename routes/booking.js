const express = require('express')
const router = express.Router()
const VehicleSchema = require('../models/vehicle')


// Get all vehicles - not mentioned in the question this is for test
router.get('/api/vehicles', async (req, res) => {
    try {
        const vehicles = await VehicleSchema.find();
        res.status(200).json(vehicles);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to get vehicles.' });
    }
});


// Book a vehicle
router.post('/api/book', async (req, res) => {
    try {
        const { firstName, lastName, vehicleType, vehicleModel, wheels, startDate, endDate } = req.body;

        // Check if the selected vehicle is available during the date range
        const vehicle = await VehicleSchema.findOne({
            vehicleType,
            vehicleModel,
            wheels,
            $or: [
                {
                    startDate: { $gte: new Date(startDate), $lte: new Date(endDate) }
                },
                {
                    endDate: { $gte: new Date(startDate), $lte: new Date(endDate) }
                },
                {
                    startDate: { $lte: new Date(startDate) },
                    endDate: { $gte: new Date(endDate) }
                }
            ]
        });

        if (vehicle) {
            return res.status(400).json({ message: 'Selected vehicle is not available during the selected dates.' });
        }


        const booking = new VehicleSchema({
            firstName,
            lastName,
            type: vehicleType, // Include the 'type' field
            model: vehicleModel,
            wheels,
            startDate: startDate,
            endDate: endDate
        });

        await booking.save();

        res.status(200).json({ message: 'Booking successful.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to book vehicle.' });
    }
});


module.exports = router