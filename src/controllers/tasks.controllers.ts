import { Request, Response } from 'express';
import { PrismaClient, } from '@prisma/client';

const prisma = new PrismaClient();

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const newTask = await prisma.task.create({
      data: { title, description },
    });
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  try {
    
    const { id } = req.params;
    const task = await prisma.task.findUnique({
      where: { id },
    });
    if (!task) {
       res.status(404).json({ message: 'Task not found.' });
       return
    }
    res.status(200).json(task);
    return
  } catch (err) {
    console.error('Error getting task:', err);
    res.status(500).json({ message: 'Could not get task.' });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, isCompleted } = req.body;
    const updatedTask = await prisma.task.update({
      where: { id },
      data: { title, description, isCompleted },
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating task.' });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.task.update({
      where: { id },
      data: { isDeleted: true },
    });
    res.status(200).json({ success: true, message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
