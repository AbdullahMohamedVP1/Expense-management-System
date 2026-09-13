import axios from 'axios';

// VITE_API_URL should point to the API root, e.g. http://localhost:5000/api/expense
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api/expense',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Backend Person 3 confirmed that all Expense endpoints require JWT.
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
