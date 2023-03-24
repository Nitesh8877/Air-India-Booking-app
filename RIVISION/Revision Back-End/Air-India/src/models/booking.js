const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true,
        unique: true
    },
    flight: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Flight'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    status: { // "booked", "cancelled", "in process"
        type: String,
        default: "in_process",
        enum: ["booked", "cancelled", "in_process"]
    }
}, { timeStamps: true });


const bookingModel=new mongoose.model('Booking', bookingSchema);
module.exports=bookingModel;