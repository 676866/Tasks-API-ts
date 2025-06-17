import express from 'express';
import {
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} from '../controllers/tasks.controllers';

const router = express.Router();

router.post('/tasks', createTask);
router.get('/tasks/:id', getTaskById);
router.patch('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;
