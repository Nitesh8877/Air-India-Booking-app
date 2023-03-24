const AirlineService=require('../service/airline.service');

exports.createAirline=async(req,res)=>{
    try {

        const airline=await AirlineService.createdAirline(req.body);

        res.status(200).send({
            success:true,
            message:"Successfully created airline",
            data:airline
        })
        
    } catch (error) {
        res.status(500).send({
            succes:false,
            message:"Somethin went wrong"
        })
    }
}

exports.getAirline=async(req,res)=>{
    try {
        const airline=await AirlineService.getAirline(req.params.name);
        if(!airline){
            return  res.status(200).send({
                message:"Airline is not present"
            })
           
        }
        res.status(200).send({
            success:true,
            message:"Successfully fetched airline",
            data:airline
        })
        
    } catch (error) {
        res.status(500).send({
            succes:false,
            message:"Somethin went wrong"
        })
    }
}

exports.getAllAirlines=async(req,res)=>{
    try {
        const airline=await AirlineService.getAllAirlines();
        if(!airline){
          return  res.status(200).send({
                message:"Airline is not present"
            })
            
        }
        res.status(200).send({
            success:true,
            message:"Successfully fetch all airline",
            data:airline
        })
        
    } catch (error) {
        res.status(500).send({
            succes:false,
            message:"Somethin went wrong"
        })
    }
}

exports.destroyAirline=async(req,res)=>{
   
    try {
        const airline=await AirlineService.destoryAirline(req.params.name);
      
        if(!airline){
          return  res.status(200).send({
                message:"Airline is not present"
            })
            
        }
        res.status(200).send({
            success:true,
            message:"Successfully deleted airline",
            data:airline
        })
        
    } catch (error) {
        res.status(500).send({
            succes:false,
            message:"Somethin went wrong"
        })
    }
}