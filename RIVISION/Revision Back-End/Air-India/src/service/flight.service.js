const Flight = require('../models/flight');

const createFlight = async (data) => {
    try {
        const newFlight = {
            depratureAirport: data.depratureAirport,
            arrivalAirport: data.arrivalAirport,
            duration: data.duration,
            airline: data.airline,
            flightDate: data.flightDate,
            departureTime: data.departureTime,
            arrivalTime: data.arrivalTime,
            flightNumber: data.flightNumber,
            price: data.price,
            boardingGate: data.boardingGate
        }
        const response = await new Flight(newFlight).save();
        return response;

    } catch (error) {
        console.log(error);
    }
}
const updateFlight = async (data) => {
    try {
        console.log(data)
        const response = await  Flight.updateOne({ flightNumber: data.flightNumber }, data)
        return response;

    } catch (error) {
        console.log(error);
    }
}
const destroyFlight = async (flightNumber) => {
    try {

        const response = await  Flight.findOneAndDelete({ flightNumber: flightNumber })
        return response;

    } catch (error) {
        console.log(error);
    }
}
const getFlight = async (flightNumber) => {
    try {
        const response = await  Flight.findOne({ flightNumber: flightNumber })
        return response;

    } catch (error) {
        console.log(error);
    }
}
const getAllFlight = async (data) => {
    try {
        let response;
        if (data.sort) {
            if (data.price) {
                if (data.sort == 'inc')
                    response = await Flight.find().sort('price');
                else
                    response = await Flight.find().sort('-price')
            }
            else if (data.duration) {
                if (data.sort == 'inc')
                    response = await Flight.find().sort('duration');
                else
                    response = await Flight.find().sort('-duration');
            }
            else {
                response = await Flight.find();
            }
        } else if (data.filter) {
                if(data.price){
                    if(data.filter=='lt')
                    response=await Flight.find({price:{$lt:data.price}})
                    else
                    response=await Flight.find({price:{$gt:data.price}})
                }else if(data.duration) {
                    if(data.filter == 'lt')
                        response = await Flight.find({duration: {$lt: data.duration}})
                    else   
                        response = await Flight.find({duration: {$gt: data.duration}});
                }  else {
                    response = await Flight.find();
                }
                return response;
        }else{
            response=await Flight.find();
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports={
    createFlight,
    updateFlight,
    destroyFlight,
    getFlight,
    getAllFlight
}