const helpDetails=(req,res)=>{
    return res.status(200).send({
        message:"success hitting the help api",
        suceess:true,
        data:{
            contact:'+9188XXXXXX25'
        }
    })
}

module.exports={helpDetails};