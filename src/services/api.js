import axios from "axios";

export const api = axios.create({
  baseURL: "localhost:3000",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("@foodexplorer:token");
      localStorage.removeItem("@foodexplorer:user");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);
