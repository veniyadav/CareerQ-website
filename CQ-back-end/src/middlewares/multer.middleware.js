import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
     
      cb(null, file.originalname) //originalname is not good prectice but this time we are use
    }
  })
  
  export const upload = multer(
    { 
        storage ,
    }
)