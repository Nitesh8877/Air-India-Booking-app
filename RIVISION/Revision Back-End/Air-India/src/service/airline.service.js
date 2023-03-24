const Airline=require('../models/airline');

const createdAirline=async(data)=>{
    try {
        const newAirline={
            name:data.name
        }
        const response=await new Airline(newAirline).save();
        return response;
        
    } catch (error) {
     console.log(error)   
    }
}

const destoryAirline=async(name)=>{
    try {
        const response=await Airline.findOneAndDelete({name:name});
        return response;    
    } catch (error) {
        console.log(error)
    }
}

const getAirline = async (name) => {
    try {
        const response = await Airline.findOne({name: name});
        return response;
    } catch(err) {
        console.log(err);
    }
} 

const getAllAirlines = async () => {
    try {
        const response = await Airline.find();;
        return response;
    } catch(err) {
        console.log(err);
    }
}

module.exports={
    createdAirline,
    destoryAirline,
    getAirline,
    getAllAirlines
}