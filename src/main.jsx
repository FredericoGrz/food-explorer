import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./hooks/auth";
import { Routes } from "./routes";
import "./index.css";
import { AlertBoxProvider } from "./hooks/AlertBox";
import { PedidoProvider } from "./hooks/Pedido";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AlertBoxProvider>
      <AuthProvider>
        <PedidoProvider>
          <Routes />
        </PedidoProvider>
      </AuthProvider>
    </AlertBoxProvider>
  </React.StrictMode>
);
