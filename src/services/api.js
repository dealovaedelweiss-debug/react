import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx triggers this function
    // Example: Simplify data extraction by returning only response.data
    return response.data;
  },
  (error) => {
    // Any status codes outside the range of 2xx trigger this function
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        // Redirect to login or trigger an automatic token refresh logic
        console.error("Unauthorized! Redirecting...");
      } else if (status === 500) {
        console.error("Server error encountered.");
      }
    }
    return Promise.reject(error); // Pass the error along to your catch block
  },
);

export default api;
