import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>{
    try{
       const connectionInstent = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n Mongodb connected !! DB HOST: ${connectionInstent.connection.host}`);
    } catch(err){
        console.log("MONGODB connection ERROR ", err);
        process.exit(1)
    }
}

export default connectDB