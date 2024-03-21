// routes/taskRoutes.js
import express from 'express';
import TaskController from '../controllers/taskController.js';

const router = express.Router();

router.post('/createTask', TaskController.createTask);
router.get('/getTasks', TaskController.getTasks);
router.patch('/updateTask/:taskId', TaskController.updateTask);
router.delete('/deleteTask/:taskId', TaskController.deleteTask);

export default router;
