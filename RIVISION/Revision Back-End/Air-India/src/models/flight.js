const mongoose=require('mongoose');

const flightSchema=new mongoose.Schema({
    depratureAirport:{
        type:String,
        required:true,
    },
    arrivalAirport:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true,
    },
    airline:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Airline'
    },
    flightDate: {
        type: Date,
        default: Date.now
    },
    departureTime: {
        type: String
    },
    arrivalTime: {
        type: String
    },
    flightNumber: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    boardingGate: {
        type: Number
    }

},{timestamps:true});

const FlightModel=new mongoose.model('Flight', flightSchema);
module.exports=FlightModel;

