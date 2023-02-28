import mongoose from "mongoose";
const { Schema } = mongoose;

const PeriodSchema = new Schema({
  number: {
    enum: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
    type: Number,
    required: true,
  },
  startTime: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
    default: 40,
  },
});

const schoolSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    teachers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Teacher",
      },
    ],
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
    admins: [
      {
        type: Schema.Types.ObjectId,
        ref: "Admin",
      },
    ],
    classes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Class",
      },
    ],
    periods: [PeriodSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("School", schoolSchema);
