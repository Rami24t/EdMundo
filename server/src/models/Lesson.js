import mongoose from "mongoose";
const { Schema } = mongoose;
const lessonSchema = new Schema({
    topic: {
        type: String,
        required: true
    },
    session: {
        type: Schema.Types.ObjectId,
        ref: 'Session',
        required: true
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
    },
    date: {
        type: Date,
        required: true
    },
    objectives: {
        type: String,
    },
    description: {
        type: String,
    },
    materials: {
        type: [String],
    },
    classworks: {
        type: [String],
    },
    homeworks: {
        type: [String],
    },
    assessment: {
        type: String,
    },
    notes: {
        type: String,
    },
    resources: {
        type: [String],
    },
    attachments: {
        type: [String],
    },
    attendance: [{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }]
}, {
    timestamps: true
})

export default mongoose.model('Lesson', lessonSchema)