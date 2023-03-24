const BookingController=require('../controllers/booking.controller');

module.exports=function(app){
    app.post('/ai/v1/api/booking', BookingController.createBooking);
    app.put('/ai/v1/api/booking/:id', BookingController.cancelBooking);
    app.get('/ai/v1/api/booking/:id', BookingController.boadingPass)
}