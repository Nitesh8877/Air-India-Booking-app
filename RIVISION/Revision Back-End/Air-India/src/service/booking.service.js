
const Booking=require('../models/booking');

exports.createBooking=async(data)=>{

   try {
    const newBooking={
        status:data.status,
        id:data.id,
        flight:data.flight,
        user:data.user
    }
    const response=await new Booking(newBooking).save();
    return response;
    
   } catch (error) {
    console.log(error)
   }

}

exports.cancelBooking=async(id)=>{
    try {   
        const response=await Booking.findOneAndUpdate({id:id},{status:'cancelled'});
        return response;
    } catch (error) {
        console.log(error);
    }
}

exports.boardingPass=async(id)=>{
    try {
        const response=await Booking.findOne({id:id})
                                        .populate('flight').populate('user').exec();
    return response;
        
    } catch (error) {
        console.log(error)
    }
}