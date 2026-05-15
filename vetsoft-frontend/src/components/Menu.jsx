import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Menú principal de navegación
function Menu() {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        VetSoft - Menú Principal
      </Typography>

      <Button variant="contained" sx={{ m: 1 }} onClick={() => navigate("/mascotas")}>
        Mascotas
      </Button>

      <Button variant="contained" sx={{ m: 1 }} onClick={() => navigate("/propietarios")}>
        Propietarios
      </Button>

      <Button variant="contained" sx={{ m: 1 }} onClick={() => navigate("/veterinarios")}>
        Veterinarios
      </Button>

      <Button variant="contained" sx={{ m: 1 }} onClick={() => navigate("/citas")}>
        Citas
      </Button>

      <Button variant="contained" sx={{ m: 1 }} onClick={() => navigate("/diagnosticos")}>
        Diagnósticos
      </Button>
    </Box>
  );
}

export default Menu;