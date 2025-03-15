// src/components/TaskItem.jsx
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function TaskItem({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const formattedTask = {
      ...editedTask,
      event_date: dayjs(editedTask.due_date).format("YYYY-MM-DD"),
    };
    updateTask(formattedTask.id, formattedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTask({ ...task });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleDateChange = (date) => {
    setEditedTask({ ...editedTask, event_date: date.format("YYYY-MM-DD") });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "success.main";
      case "In Progress":
        return "warning.main";
      case "To Do":
        return "error.main";
      default:
        return "primary.main";
    }
  };

  return (
    <Card variant="outlined" style={{ marginBottom: "10px" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {isEditing ? (
            <TextField
              size="small"
              fullWidth
              name="title"
              value={editedTask.title}
              onChange={handleChange}
            />
          ) : (
            task.title
          )}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {isEditing ? (
            <TextField
              size="small"
              fullWidth
              multiline
              name="description"
              value={editedTask.description}
              onChange={handleChange}
            />
          ) : (
            task.description
          )}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Event Date:{" "}
          {isEditing ? (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                size="small"
                value={dayjs(editedTask.due_date)}
                onChange={handleDateChange}
                format="YYYY-MM-DD"
              />
            </LocalizationProvider>
          ) : (
            dayjs(task.due_date).format("YYYY-MM-DD")
          )}
        </Typography>
        <Typography variant="caption" color={getStatusColor(task.status)}>
          Status:{" "}
          {isEditing ? (
            <FormControl fullWidth size="small">
              <InputLabel id="status-select-label">Status</InputLabel>
              <Select
                labelId="status-select-label"
                id="status-select"
                name="status"
                value={editedTask.status}
                onChange={handleChange}
                label="Status"
              >
                <MenuItem value="To Do">To Do</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>
          ) : (
            task.status
          )}
        </Typography>
      </CardContent>
      <CardActions>
        {isEditing ? (
          <>
            <IconButton onClick={handleSave}>
              <SaveIcon />
            </IconButton>
            <IconButton onClick={handleCancel}>
              <CancelIcon />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteTask(task.id)}>
              <DeleteIcon />
            </IconButton>
          </>
        )}
      </CardActions>
    </Card>
  );
}

export default TaskItem;
