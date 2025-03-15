// backend/models/taskModel.js
const pool = require("../db"); // Your database connection pool

class TaskModel {
  async getTasks() {
    const [rows] = await pool.query("SELECT * FROM tasks");
    return rows;
  }

  async getTask(id) {
    const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
    return rows[0];
  }

  async createTask(task) {
    const { title, description, due_date } = task;
    await pool.query(
      "INSERT INTO tasks (title, description, due_date) VALUES (?, ?, ?)",
      [title, description, due_date]
    );
  }

  async updateTask(id, task) {
    const { title, description, due_date, status } = task;
    await pool.query(
      "UPDATE tasks SET title = ?, description = ?, due_date = ?, status = ? WHERE id = ?",
      [title, description, due_date, status, id]
    );
  }

  async deleteTask(id) {
    await pool.query("DELETE FROM tasks WHERE id = ?", [id]);
  }
}

module.exports = new TaskModel();
