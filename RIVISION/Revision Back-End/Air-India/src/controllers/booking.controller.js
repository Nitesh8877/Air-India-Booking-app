const BookingService=require('../service/booking.service');

exports.createBooking=async(req,res)=>{
    try {

        const Booking=await BookingService.createBooking(req.body);
        if(!Booking){
            return  res.status(200).send({
                success:false,
                message:"something went wrong please check you data",
                data:null
            })
           }
        res.status(200).send({
            success:true,
            message:"Successfully booking flight ticket",
            data:Booking
        })
        
    } catch (error) {
        res.status(500).send({
            succes:false,
            message:"Somethin went wrong"
        })
    }
}

exports.cancelBooking= async(req,res)=>{
    try {
        const Cancel=await BookingService.cancelBooking(req.params.id)

        res.status(200).send({
            success:true,
            message:"Successfully cancel ticket",
            data:Cancel
        })
        
    } catch (error) {
        res.status(500).send({
            succes:false,
            message:"Somethin went wrong"
        })
    }
}
exports.boadingPass= async(req,res)=>{
    try {
        const BoadingPass=await BookingService.boardingPass(req.params.id)
       if(!BoadingPass){
        return  res.status(200).send({
            success:false,
            message:"failed fetch boading pass please try again",
            data:null
        })
       }
        res.status(200).send({
            success:true,
            message:"Successfully fetch boading pass",
            data:BoadingPass
        })
        
    } catch (error) {
        res.status(500).send({
            succes:false,
            message:"Somethin went wrong"
        })
    }
}

