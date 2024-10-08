import mongoose from "mongoose";

const subTaskSchema = new mongoose.Schema({
  task_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    required: true
  },
  status: {
    type: Number,
    enum: [0, 1], // 0: Incomplete, 1: Complete
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: {
    type: Date,
    default: null
  }
});

const SubTask =mongoose.model("SubTask",subTaskSchema);

export default SubTask;
