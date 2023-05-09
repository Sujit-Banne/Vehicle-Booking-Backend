const mongoose = require('mongoose');

//vehicle schema
const vehicleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['car', 'bike'],
        required: true,
    },
    wheels: {
        type: Number,
        required: true,
        enum: [2, 4],
    },
});

//booking schema
const bookingSchema = new mongoose.Schema({
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle', //refer from vehicle schema
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = { Vehicle, Booking };
