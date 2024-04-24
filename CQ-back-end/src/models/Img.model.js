import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const imgSchema = new Schema(
    {
       imageFile:[
        {
            type:String,  //cloudinary url
            required:[true,"Image is required"],
        }
       ],
       title:{
        type:String,
        required:[true,"Title is required"],
       },
       description:{
        type:String,
        required:[true,"Description is required"],
       },
       views:{
        type:Number,
        default: 0,
       },
       isPublished:{
        type:Boolean,
        default:true,
       },
       owner:{
        type: Schema.Types.ObjectId,
        ref:"User"
       }
    },
    {
        timestamps:true
    }
)

imgSchema.plugin(mongooseAggregatePaginate )

export const Image = mongoose.model("Image", imgSchema)