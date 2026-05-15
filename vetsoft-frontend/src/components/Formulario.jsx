import React from "react";
import { TextField, Button, Box } from "@mui/material";

// Componente reutilizable de formularios
function Formulario({ label, value, onChange, onSubmit }) {

  return (

    <Box component="form" onSubmit={onSubmit} sx={{ mb: 3 }}>

      <TextField
        label={label}
        value={value}
        onChange={onChange}
        fullWidth
        required
        sx={{ mb: 2 }}
      />

      <Button
        type="submit"
        variant="contained"
      >
        Guardar
      </Button>

    </Box>
  );
}

export default Formulario;