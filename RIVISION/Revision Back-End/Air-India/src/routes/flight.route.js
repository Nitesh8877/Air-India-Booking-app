const FlightController=require('../controllers/flight.controller');

module.exports=function(app){
    app.post('/ai/v1/api/flights', FlightController.createFlight);
    app.get('/ai/v1/api/flights/:flightNumber', FlightController.getFlight);
    app.get('/ai/v1/api/flights',FlightController.getAllFlights );
    app.delete('/ai/v1/api/flights/:flightNumber', FlightController.destroyFlight);

    app.put('/ai/v1/api/flights/:flightNumber',FlightController.updateFlight);
}