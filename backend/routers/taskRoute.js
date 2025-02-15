
const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  deleteAllTasks
} = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware);

router.get("/", getTasks); 
router.get("/:id", getTask); 
router.post("/", createTask); 
router.put("/:id", updateTask); 
router.delete("/:id", deleteTask);
router.delete("/", deleteAllTasks); 

module.exports = router;
