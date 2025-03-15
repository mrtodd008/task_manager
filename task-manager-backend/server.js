// server.js
const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
const port = 5006;

app.use(cors());
app.use(express.json());

// Get all tasks
app.get("/tasks", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tasks");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get a single task
app.get("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Create a task
app.post("/tasks", async (req, res) => {
  try {
    const { title, description, due_date } = req.body;
    await pool.query(
      "INSERT INTO tasks (title, description, due_date) VALUES (?, ?, ?)",
      [title, description, due_date]
    );
    res.status(201).json({ message: "Task created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Update a task
app.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, due_date, status } = req.body;
    await pool.query(
      "UPDATE tasks SET title = ?, description = ?, due_date = ?, status = ? WHERE id = ?",
      [title, description, due_date, status, id]
    );
    res.json({ message: "Task updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a task
app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM tasks WHERE id = ?", [id]);
    res.json({ message: "Task deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
