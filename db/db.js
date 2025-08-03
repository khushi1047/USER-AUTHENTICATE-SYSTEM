// need to install mongoose first , to connect the express application to mongodb

import mongoose from "mongoose";

const connectDB = async(url) =>{
    try{
        const dbOption = {
            dbName : "authsystem"
        }
        const response = await mongoose.connect(url , dbOption );
        if(response){
            console.log("Database connected!");
        }
        else{
            console.log("Database not connected!")
        }
    }
    catch(err){
        console.log(error.message);
    }
}
export default connectDB;