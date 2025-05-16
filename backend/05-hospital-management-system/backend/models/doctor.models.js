import mongoose from "mongoose";

const hospitalHoursSchema = new mongoose.Schema({
   name:{
       type:String,
       required:true,
   },
        addressLine1:{
            type:String,
            required:true,
        },
        addressLine2:{
            type:String,
        },
        zipCode:{
       type:String,
        required:true,
        },
    specializedIn:[
        {
            type:String,
        }
    ],

    day: {
        type: String,
        required: true,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    openingTime: {
        type: String,
        required: true
    },
    closingTime: {
        type: String,
        required: true
    }
}
);
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowerCase: true
    },
    specialization: {
        type: String,
        required: true
    },
    experienceInYears: {
        type: Number,
        required: true,
        default:0
    },
    salary: {
        type: Number,
        required: true
    },
    contact: {
        phone: String,
        email: String
    },
    worksInHospitals:[
        {hospitalHoursSchema
        }
    ],

}, {
    timestamps: true,
})

export const Doctor = mongoose.model("Doctor", doctorSchema);
