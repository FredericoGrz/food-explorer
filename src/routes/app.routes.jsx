import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Prato from "../Pages/Prato/Prato";
import PratoDetalhes from "../Pages/Prato/PratoDetalhes";
import Categoria from "../Pages/Categoria";
import Favoritos from "../Pages/Favoritos";
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
      <Route
        path="/prato/:id"
        element={<Prato />}
      />
      <Route
        path="/pratodetalhes/:id"
        element={<PratoDetalhes />}
      />
      <Route
        path="/categoria"
        element={<Categoria />}
      />
      <Route
        path="/favoritos"
        element={<Favoritos />}
      />
    </Routes>
  );
}
