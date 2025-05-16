import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        lowerCase:true
    },
    age: {type:Number,required:true},
    gender: {type:String,required:true,enum:["M","F","O"]},
    bloodGroup:{
        type:String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required:true
    },
    vitals: [{
        date: Date,
        bloodPressure: String,
        heartRate: Number,
        temperature: Number,
        notes: String
    }],
    address: {
        street: String,
        city: String,
        zip: String,
        state: String,
        country: String
    },
    contact: {
        phone: String,
        email: String
    },
    emergencyContact: {
        name: String,
        relation: String,
        phone: String
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
    },
    assignedDoctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    ward: { type: mongoose.Schema.Types.ObjectId, ref: 'Ward' },
    history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MedicalHistory' }],

    symptoms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Symptom' }],
    diagnosis: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Diagnosis' }],
    reports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }]
},{
    timestamps: true,
});

export const Patient = mongoose.model("Patient", patientSchema);

