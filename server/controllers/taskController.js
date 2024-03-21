// controllers/taskController.js
import Task from '../models/taskModel.js';

const TaskController = {
    createTask: async (req, res) => {
        try {
            const { title, description, due_date, priority, status } = req.body;
            const newTask = await Task.create({ title, description, due_date, priority, status });
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getTasks: async (req, res) => {
        try {
            const tasks = await Task.find();
            res.json(tasks);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    ,
    updateTask: async (req, res) => {
        try {
            const { taskId } = req.params;
            const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, { new: true });
            res.json(updatedTask);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteTask: async (req, res) => {
        try {
            const { taskId } = req.params;
            await Task.findByIdAndDelete(taskId);
            res.json({ message: 'Task deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
  // Add other controller methods as needed

//   // Download the helper library from https://www.twilio.com/docs/node/install
// // Set environment variables for your credentials
// // Read more at http://twil.io/secure
// const accountSid = "AC01fecde580842302ab74cac8aeac655c";
//     const authToken = "fc93992f0134122e7f19585a5e4b96d1";
//     const client = require("twilio")(accountSid, authToken);

//     client.calls.create({
//         url: "http://demo.twilio.com/docs/voice.xml",
//         to: "+917269001145",
//         from: "+14242475742",
//     })
//         .then(call => console.log(call.sid));
};

export default TaskController;
