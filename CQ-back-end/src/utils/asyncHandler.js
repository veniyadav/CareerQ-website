const asyncHandler = (requestHandler) =>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=> next(err))
    }
}



// ----- this is also valid request handler code but farst is best aproch ------


// const asyncHandler = (fn)=> async (req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(err.code || 500).json({
//             success : false,
//             message: err.message
//         })
//     }
// }

export {asyncHandler}