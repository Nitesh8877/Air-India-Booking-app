const FlightService=require('../service/flight.service');

exports.createFlight=async(req,res)=>{
    try {

        const flight=await FlightService.createFlight(req.body);

        res.status(200).send({
            success:true,
            message:"Successfully created flight",
            data:flight
        })
        
    } catch (error) {
        res.status(500).send({
            succes:false,
            message:"Somethin went wrong"
        })
    }
}

exports.getFlight=async(req,res)=>{
    try {
        const flight=await FlightService.getFlight(req.params.flightNumber);
        if(!flight){
            return  res.status(200).send({
                message:"flight is not present"
            })
           
        }
        res.status(200).send({
            success:true,
            message:"Successfully fetched flight",
            data:flight
        })
        
    } catch (error) {
        res.status(500).send({
            succes:false,
            message:"Somethin went wrong"
        })
    }
}

exports.getAllFlights=async(req,res)=>{
    try {
        const flight=await FlightService.getAllFlight(req.query);
        if(!flight){
          return  res.status(200).send({
                message:"flight is not present"
            })
            
        }
        res.status(200).send({
            success:true,
            message:"Successfully fetch all flight",
            data:flight
        })
        
    } catch (error) {
        res.status(500).send({
            succes:false,
            message:"Somethin went wrong"
        })
    }
}

exports.destroyFlight=async(req,res)=>{
   
    try {
        const flight=await FlightService.destroyFlight(req.params.flightNumber);
      
        if(!flight){
          return  res.status(200).send({
                message:"Flight is not present"
            })
            
        }
        res.status(200).send({
            success:true,
            message:"Successfully deleted flight",
            data:flight
        })
        
    } catch (error) {
        res.status(500).send({
            succes:false,
            message:"Somethin went wrong"
        })
    }
}

exports.updateFlight=async(req,res)=>{
    try {
        const flight=await FlightService.updateFlight(req.body);
        res.status(200).send({
            success:true,
            message:"Successfully update flight",
            data:flight
        })
        
    } catch (error) {
        res.status(500).send({
            succes:false,
            message:"Somethin went wrong"
        })
    }
}