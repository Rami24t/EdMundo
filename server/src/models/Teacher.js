import mongoose from "mongoose";
const { Schema } = mongoose;
const TeacherSchema = new Schema({
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
    //     unique: true,
    //     //        required: true
    // },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    role: {
        type: String,
        default: 'teacher'
    },
    // Lesson ? 
}, {
    timestamps: true
})
export default mongoose.model('Teacher', TeacherSchema)