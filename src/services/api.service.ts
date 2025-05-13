import axios from "axios";
import { handleUnauthorized } from "../utils/redirect";

const API = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("_a");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("_a");
      handleUnauthorized();
    }
    return Promise.reject(error);
  }
);

export default API;
