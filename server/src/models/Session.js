import mongoose from "mongoose";
const { Schema } = mongoose;
const sessionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    period: {
        type: Schema.Types.ObjectId,
        ref: 'Period',
        required: true
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
    },
    class: {
        type: Schema.Types.ObjectId,
            ref: 'Class',
            required: true
    },
}, {
    timestamps: true
})

export default mongoose.model('Session', sessionsSchema)