const mongoose=require('mongoose');

const connect=()=>{
    console.log("Mongodb connection successful");
    return mongoose.connect('mongodb://127.0.0.1:27017/Air-India');
}
module.exports={
    connect
}
