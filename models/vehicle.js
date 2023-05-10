const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: false,
    },
    wheels: {
        type: Number,
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


module.exports = mongoose.model('Vehicle', vehicleSchema);
