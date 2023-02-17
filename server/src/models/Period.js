import mongoose from "mongoose";
const { Schema } = mongoose;

const PeriodSchema = new Schema({
    number: {
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        type: Number,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
}, {
    timestamps: true
})

// PeriodSchema.path('endTime').validate(function(endTime) {
//     return endTime > this.startTime;
// }, 'End time must be after start time');

export default mongoose.model('Period', PeriodSchema)