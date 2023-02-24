import mongoose from "mongoose";
const { Schema } = mongoose;
const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // username: {
    //     type: String,
    //     //        required: true
    // },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'admin'
    },
}, {
    timestamps: true
})

export default mongoose.model('Admin', adminSchema)