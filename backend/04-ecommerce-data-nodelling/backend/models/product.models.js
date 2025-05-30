import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        required: true,
        type:String
    },
    description:{
        required: true,
        type:String
    },
    productImage:{
        type:String,
    },
    price:{
        type:Number,
        default:0
    },
    quantity:{
        type:Number,
        default:0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
},{
    timestamps:true
})

export const Product = mongoose.model("Product",productSchema);
