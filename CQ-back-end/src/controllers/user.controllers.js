import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req,res)=>{
   const {fullname,username,email,password} = req.body;
   console.log("fullname: ",fullname ,"+", "\nemail: ",email , "+", "password: ",password);

   if(fullname ===""){
    throw new ApiError(400,"fullname is required")
   }
   if(username ==="" && username===" " && username=="-"){
    throw new ApiError(400,"right userName is required")
   }
   if(email ==="" && !email==="@"){
    throw new ApiError(400,"Email is not correct or empty")
   }
   if(password==="" && password==="123456"){
    throw new ApiError(400,"password is not correct or empty")
   }

  const existedUser = User.findOne({
    $or:[{username},{email}]
   })
   if(existedUser){
    throw new ApiError(409,"User with email or username already exists")
   }

   const avatarLocalPath = req.files?.avatar[0]?.path;
   if(!avatarLocalPath){
    throw new ApiError(400,"Avatar is not empty")
   }

  const avatar = await uploadOnCloudinary(avatarLocalPath)
  if(!avatar){
    throw new ApiError(400,"Avatar is not empty")
  }

 const user = await User.create({
    fullname,
    avatar:avatar.url,
    email,
    password,
    username: username.toLowerCase()
  })

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  )
  if(!createdUser){
    throw new ApiError(500,"Something went Wrong while registering the user")
  }

  return res.status(201).json(
    new ApiResponse(200,createdUser, "User registered successfully")
  )
})


export {registerUser}