import mongoose from "mongoose";
const { Schema } = mongoose;
const schoolSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    City: {
        type: String,
    },
    State: {
        type: String,
    },
    Zip: {
        type: String,
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    Teachers: [{
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    }],
    Students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }],
    Admins: [{
        type: Schema.Types.ObjectId,
        ref: 'Admin'
    }],
    Classes: [{
        type: Schema.Types.ObjectId,
        ref: 'Class'
    }],
    Periods: [{
        type: Schema.Types.ObjectId,
        ref: 'period'
    }],
}, {
    timestamps: true
})

export default mongoose.model('School', schoolSchema)