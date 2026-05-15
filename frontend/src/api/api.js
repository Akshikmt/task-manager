import axios from 'axios';

// Use VITE_API_URL from Vercel in production, otherwise fallback to localhost
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/tasks';

export const getAllTasks = () => {
  return axios.get(BASE_URL);
};

export const createTask = (title) => {
  return axios.post(BASE_URL, { title });
};

export const toggleTask = (id) => {
  return axios.put(`${BASE_URL}/${id}`);
};

export const deleteTask = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
