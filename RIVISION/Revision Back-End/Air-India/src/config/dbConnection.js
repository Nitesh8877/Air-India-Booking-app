// //mongoose database connectd in this way

// var MongoClient = require('mongoose');
// var url = "mongodb://127.0.0.1:27017/mong";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log(db)
//   console.log("Database created!");
  
// });
// const mongoose=require('mongoose');

// const userSchema=new mongoose.Schema({
//     email:{
//         type:String,
//         required:true,
//         unique:true,
//     },
//     password:{
//         type:String,
//         required:true,
//     },
//     username:{
//         type:String,
//         required:true,
//     }
// },{
//     timestamps:true
// });

// const User=mongoose.model('User',userSchema);
// let user=User.create({email:"nitehs123@gmail.com",password:12345,username:"abc"});
// console.log(user);

// mySql database connectd

// Importing module
// var mysql = require('mysql')

// var connection = mysql.createConnection({
// 	host:"localhost",
// 	user:"root",
// 	password:"",
// 	database : "test"
// })

// // Connecting to database
// connection.connect(function(err) {
// 	if(err){
// 	console.log("Error in the connection")
// 	console.log(err)
// 	}
// 	else{
// 	console.log(`Database Connected`)
// 	connection.query(`SHOW DATABASES`,
// 	function (err, result) {
// 		if(err)
// 		console.log(`Error executing the query - ${err}`)
// 		else
// 		console.log("Result: ",result)
// 	})
// 	}
// })

