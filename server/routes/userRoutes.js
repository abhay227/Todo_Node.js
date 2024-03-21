// routes/userRoutes.js
import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router();

router.post('/createUser', UserController.createUser);

export default router;
