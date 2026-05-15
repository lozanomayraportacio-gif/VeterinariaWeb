import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (usuario.trim() === "" || password.trim() === "") {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (usuario === "admin" && password === "123456") {
      alert("Bienvenida a VetSoft");
      navigate("/menu");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
      }}
    >
      <Paper elevation={5} sx={{ padding: 4, width: 400 }}>

        <Typography variant="h4" align="center" gutterBottom>
          VetSoft Login
        </Typography>

        <form onSubmit={handleLogin}>

          <TextField
            label="Usuario"
            fullWidth
            margin="normal"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />

          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Ingresar
          </Button>

        </form>

      </Paper>
    </Box>
  );
}

export default Login;