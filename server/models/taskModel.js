import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  due_date: {
    type: Date,
    required: true
  },
  priority: {
    type: Number,
    enum: [0, 1, 2, 3], // Priority levels
    default: 0
  },
  status: {
    type: String,
    enum: ['TODO', 'IN_PROGRESS', 'DONE'],
    default: 'TODO'
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

const Task =mongoose.model("Task",taskSchema);

export default Task;
