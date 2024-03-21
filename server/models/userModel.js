import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  phone_number: {
    type: String,
    required: true
  },
  priority: {
    type: Number,
    enum: [0, 1, 2], // Priority levels
    default: 0
  }
});

const User =mongoose.model("User",userSchema);

export default User;
