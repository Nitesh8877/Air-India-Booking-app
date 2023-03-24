const express=require('express');
const {connect1}=require('./src/config/database');
const {User}=require('./src/models/user');
const app=express();
 
const apiRouter=require('./src/routes/index.js');

app.use('/api',apiRouter);


app.get('/',(req,res)=>{
    res.status(200);
    res.send({
        success:true,
        message:"success hitting the api",
        data:{}
    })
})



app.listen(8080, async()=>{
    await connect1();

    console.log("server startd successfully");
    console.log("mongo db conncted successfully")
    let user=User.create({email:"nitehs123@gmail.com",password:12345,username:"abc"});
    console.log(user);
})