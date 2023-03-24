const AirlineRoutes=require('../controllers/airline.controller');


module.exports=function(app){
    app.post('/ai/v1/api/airlines', AirlineRoutes.createAirline);
    app.get('/ai/v1/api/airlines/name', AirlineRoutes.getAirline);
    app.get('/ai/v1/api/airlines',AirlineRoutes.getAllAirlines );
    app.delete('/ai/v1/api/airlines/:name', AirlineRoutes.destroyAirline);
}