// controllers/subTaskController.js
import SubTask from '../models/subTaskModel.js';

const SubTaskController = {
    createSubTask: async (req, res) => {
        try {
            const { task_id } = req.body;
            const newSubTask = await SubTask.create({ task_id });
            res.status(201).json(newSubTask);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getSubTasks: async (req, res) => {
        try {
            const { taskId } = req.params;
            const subTasks = await SubTask.find({ task_id: taskId });
            res.json(subTasks);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateSubTask: async (req, res) => {
        try {
            const { subTaskId } = req.params;
            const { status } = req.body;
            const updatedSubTask = await SubTask.findByIdAndUpdate(subTaskId, { status }, { new: true });
            res.json(updatedSubTask);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteSubTask: async (req, res) => {
        try {
            const { subTaskId } = req.params;
            await SubTask.findByIdAndDelete(subTaskId);
            res.json({ message: 'Subtask deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

export default SubTaskController;
