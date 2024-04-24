import dotenv from "dotenv"
import connectDB from "./dbs/server.js";
import express from 'express'
const app = express()
dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8080, () =>{
        const portInvirment = process.env.PORT || 8080;
        console.log(` server is run on prot : ${portInvirment}`);
    })
    app.on("error",(error) => {
        console.log("Error express: ",error);
        throw error
       })
    
})
.catch((err)=>{
    console.log("Mongo db connection failed !!! ", err);
})

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";



// Normal cording to database connection 
/*
import express from 'express'
const app = express()
( async ()=>{
    try{
       mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error",(error) => {
        console.log("Error express: ",error);
        throw error
       })

       app.listing(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
       })

    } catch(err){
        console.error("ERROR:", error);
        throw err
    }
})()

*/








// import express from 'express';

// const app = express();
// app.get('/',(req,res)=>{
//     res.send("server is ready");
// });

// app.get('/api/jokes',(req,res)=>{
//     const jokes = [
//         {
//             id:1,
//             title:"A jokeer",
//             content:"too much funn",
//         },
//         {
//             id:2,
//             title:"B jokeer Naach",
//             content:"too much NAACH",
//         },
//         {
//             id:3,
//             title:"C jokeer C",
//             content:"jyada mat hass funn",
//         },
//         {
//             id:4,
//             title:"D jokeer",
//             content:"more tuch much funn",
//         }

//     ]
//     res.send(jokes);
// });

// const port = process.env.PORT || 3000;
// app.listen(port,()=>{
//     console.log(`sever at http://localhost:${port}`);
// });
