import mongoose from "mongoose";
const { Schema } = mongoose;
const sessionSchema = new Schema(
  {
    subjectName: {
      type: String,
      required: true,
    },
    weekDay: {
      enum: [0, 1, 2, 3, 4, 5],
      type: Number,
      required: true,
    },
    slot: {
      enum: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20,
      ],
      type: Number,
      required: true,
    },
    periodNumber: {
      enum: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ],
      type: Number,
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
    },
    class: {
      type: Schema.Types.ObjectId,
      ref: "Class",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Session", sessionSchema);
