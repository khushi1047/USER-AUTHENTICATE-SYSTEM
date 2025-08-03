// need to install mongoose first , to connect the express application to mongodb

import mongoose from "mongoose";

const connectDB = async(url) =>{
    try{

        const response = await mongoose.connect(url);
        if(response){
            console.log("Database connected!");
        }
        else{
            console.log("Database not connected!")
        }
    }
    catch(err){
        console.log(err.message);
    }
}
export default connectDB;