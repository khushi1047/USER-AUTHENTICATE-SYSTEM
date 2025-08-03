import mongoose from "mongoose";
// schema
const userSchema = new mongoose.Schema({
    username:{
        type:"String",
        required:true
    },
    email:{
        type : "String",
        required:true
    },
    password:{
        type : "String",
        required:true
    }
    
    

})

// model
const User = mongoose.model('auth_user',userSchema);
export default User;