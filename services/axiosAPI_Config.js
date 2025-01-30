import axios from "axios";

// Create Axios instance
const clientApi = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_URL, // Base URL for your API
  // baseURL: "http://localhost:8000/api", // Base URL for your API
  timeout: 5000, // Optional: Set timeout for requests
});

// Add request interceptor to include Bearer token in headers
clientApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage
    if (token) {
      // console.log(token);
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default clientApi;
