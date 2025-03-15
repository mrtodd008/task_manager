// server.js
const express = require("express");
const cors = require("cors");
const pool = require("./db");
const taskController = require("./controllers/taskController");
const app = express();
const port = 5006;

app.use(cors());
app.use(express.json());

// Get all tasks
app.get("/tasks", taskController.getTasks);
// Get a single task
app.get("/tasks/:id", taskController.getTask);
// Create a task
app.post("/tasks", taskController.createTask);
// Update a task
app.put("/tasks/:id", taskController.updateTask);
// Delete a task
app.delete("/tasks/:id", taskController.deleteTask);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
