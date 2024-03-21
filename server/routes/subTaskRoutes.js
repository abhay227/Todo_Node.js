// routes/subTaskRoutes.js
import express from 'express';
import SubTaskController from '../controllers/subTaskController.js';

const router = express.Router();

router.post('/create', SubTaskController.createSubTask);
router.get('/get/:taskId', SubTaskController.getSubTasks);
router.patch('/update/:subTaskId', SubTaskController.updateSubTask);
router.delete('/delete/:subTaskId', SubTaskController.deleteSubTask);

export default router;
