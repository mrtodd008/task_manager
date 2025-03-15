// src/components/TaskList.jsx
import React from "react";
import { Grid } from "@mui/material";
import TaskItem from "./TaskItem";

function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <Grid container spacing={2}>
      {tasks.map((task) => (
        <Grid item xs={12} key={task.id}>
          <TaskItem
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default TaskList;
