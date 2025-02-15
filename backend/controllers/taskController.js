const Task = require("../models/task");

const createTask = async (req, res) => {
  try {
    const { title, description, priority, dueDate, status } = req.body;
    const task = await Task.create({
      title,
      description,
      priority,
      dueDate,
      status,
      user: req.user._id
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ 
      _id: req.params.id, 
      user: req.user._id 
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id }, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ 
      _id: req.params.id, 
      user: req.user._id 
    });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAllTasks = async (req, res) => {
  try {
      
      const userId = req.user._id;

      
      const result = await Task.deleteMany({ user: userId });

      res.status(200).json({
          success: true,
          message: 'All tasks deleted successfully',
          deletedCount: result.deletedCount
      });
  } catch (error) {
      console.error('Error deleting all tasks:', error);
      res.status(500).json({
          success: false,
          message: 'Failed to delete all tasks',
          error: error.message
      });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,deleteAllTasks
};