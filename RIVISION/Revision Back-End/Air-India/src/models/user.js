const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },

},{
    timestamps:true
});
// Pre-save - is a trigger that gets a function and executes it befor a user object save
userSchema.pre('save',async function encryptPassword(next){
    const user=this;
    const hash=await bcrypt.hash(this.password,10);
    this.password=hash;
    next();
});

userSchema.methods.isValidPassword=async function checkValidity(password){
    const user=this;
    const compare=await bcrypt.compare(password,user.password);
    return compare;
}

module.exports = mongoose.model("User", userSchema)