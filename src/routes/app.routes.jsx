import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Prato from "../Pages/Prato/Prato";
import Menu from "../Pages/Menu";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/menu"
        element={<Menu />}
      />
      <Route
        path="/prato"
        element={<Prato />}
      />
    </Routes>
  );
}
