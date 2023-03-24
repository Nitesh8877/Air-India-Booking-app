const express = require("express");
const app = express();
const bodyParser=require('body-parser')
const apiRouter = require('./src/routes/index');
const authRouter=require('./src/routes/authRouts')
const { connect } = require("./src/config/database");
const User=require('./src/models/user');
require('./src/util/auth')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());
app.use('/',authRouter)
app.use("/api", apiRouter);

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});
const Airline=require('./src/routes/airline.route');
Airline(app);
require('./src/routes/flight.route')(app)
require('./src/routes/booking.route')(app)
require('./src/routes/review.route')(app)
app.listen(8000, async () => {
  await connect();

  console.log("Mongo db Connected successfully!!")
  console.log(`Server is running on port 8000.`);

});