const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    wheels: {
        type: Number,
        required: true
    },
    isBooked: {
        type: Boolean,
        default: false
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
});


module.exports = mongoose.model('Vehicle', vehicleSchema);

