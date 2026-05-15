import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../components/Login";
import Menu from "../components/Menu";

import Mascotas from "../pages/Mascotas";
import Propietarios from "../pages/Propietarios";
import Veterinarios from "../pages/Veterinarios";
import Citas from "../pages/Citas";
import Diagnosticos from "../pages/Diagnosticos";

// Configuración de rutas del sistema
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/mascotas" element={<Mascotas />} />
        <Route path="/propietarios" element={<Propietarios />} />
        <Route path="/veterinarios" element={<Veterinarios />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/diagnosticos" element={<Diagnosticos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;