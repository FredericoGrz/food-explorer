import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./hooks/auth";
import { Routes } from "./routes";
import "./index.css";
import { AlertBoxProvider } from "./hooks/AlertBox";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AlertBoxProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </AlertBoxProvider>
  </React.StrictMode>
);
