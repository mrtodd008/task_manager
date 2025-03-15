// src/api.js
import axios from "axios";

const API_BASE_URL = "/api"; // Use the proxy from vite.config.js

export const fetchTasks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tasks`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error; // Re-throw to handle in components
  }
};

export const createTask = async (task) => {
  try {
    await axios.post(`${API_BASE_URL}/tasks`, task);
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

export const updateTask = async (id, updatedTask) => {
  try {
    await axios.put(`${API_BASE_URL}/tasks/${id}`, updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/tasks/${id}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

export const fetchTask = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error("error fetching single task: ", error);
    throw error;
  }
};
