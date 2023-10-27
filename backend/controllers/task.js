// controllers/task.js
const Task = require('../models/task')

async function getAllTasks(req, res) {
  const tasks = await Task.find();
  res.json(tasks);
}

async function createTask(req, res) {
  // Create a new task
  const newTask = new Task(req.body);
  const savedTask = await newTask.save();
  res.json(savedTask);
}
async function getTask(req, res) {
  const taskId = req.params.taskId;
  try {
    // Fetch a specific task by ID from the database
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateTask(req, res) {
  const taskId = req.params.taskId;
  try {
    // Update a specific task by ID in the database
    const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteTask(req, res) {
  const taskId = req.params.taskId;
  try {
    // Delete a specific task by ID from the database
    const deletedTask = await Task.findByIdAndRemove(taskId);
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(deletedTask);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
// Implement similar functions for getTask, updateTask, and deleteTask
