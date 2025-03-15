// src/components/TaskForm.jsx
import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function TaskForm({ addTask }) {
  const [task, setTask] = useState({
    event: "",
    description: "",
    event_date: dayjs(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleDateChange = (date) => {
    setTask({ ...task, event_date: date.format("YYYY-MM-DD") });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedTask = {
      ...task,
      event_date: dayjs(task.due_date).format("YYYY-MM-DD"),
    };
    addTask(formattedTask);
    setTask({ event: "", description: "", event_date: dayjs() });
  };

  return (
    <Paper elevation={3} style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Add New Event
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Event"
              name="Event"
              value={task.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              label="Description"
              name="description"
              value={task.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Event Date"
                value={dayjs(task.due_date)}
                onChange={handleDateChange}
                format="YYYY-MM-DD"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Event
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default TaskForm;
