const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');

router.get('/', taskController.getAllTasks);
router.post('/', taskController.createTask);
router.get('/:taskId', taskController.getTask);
router.put('/:taskId', taskController.updateTask);
router.delete('/:taskId', taskController.deleteTask);

module.exports = router;