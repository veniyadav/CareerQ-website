import {v2 as cloudinary } from "cloudinary"
import fs from "fs"

       
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) =>{
    try{
        if(!localFilePath) return null
        //upload the file on local
       const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        // file has been uploaded successfull
        console.log("Image is uploaded on cloudinary",
    response.url);
    return response;
    }catch(error){
         fs.unlinkSync(localFilePath)  //remove the locally saved temporary file as the upload operation got faild operation got failed
         return null;
    }
}

// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });
export {uploadOnCloudinary}