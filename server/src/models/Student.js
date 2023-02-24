import mongoose from "mongoose";
const { Schema } = mongoose;
const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    // username: {
    //     type: String,
    //     // required: true
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
    currentClass: {
        type: Schema.Types.ObjectId,
        ref: 'Class',
    },
    role: {
        'type': String,
        'default': 'student'
    },
}, {
    timestamps: true
})

export default mongoose.model('Student', studentSchema)