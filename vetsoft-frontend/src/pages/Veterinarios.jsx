import React, { useEffect, useState } from "react";

import {
  Typography,
  Container,
  TextField,
  Button,
  Box
} from "@mui/material";

import Navbar from "../components/Navbar";
import Tabla from "../components/Tabla";

import api from "../services/api";

function Veterinarios() {

  // LISTA
  const [datos, setDatos] = useState([]);

  // FORMULARIO
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [telefono, setTelefono] = useState("");

  // CARGAR DATOS
  const cargarDatos = async () => {

    try {

      const response = await api.get("/VeterinarioApiServlet");

      setDatos(response.data);

    } catch (error) {

      console.error("Error cargar veterinarios:", error);
    }
  };

  useEffect(() => {

    cargarDatos();

  }, []);

  // EDITAR
  const editarVeterinario = (item) => {

    setId(item.id);
    setNombre(item.nombre);
    setEspecialidad(item.especialidad);
    setTelefono(item.telefono);
  };

  // GUARDAR / ACTUALIZAR
  const guardar = async (e) => {

    e.preventDefault();

    try {

      const formData = new URLSearchParams();

      formData.append("nombre", nombre);
      formData.append("especialidad", especialidad);
      formData.append("telefono", telefono);

      // INSERTAR
      if (id === "") {

        await api.post(
          "/VeterinarioServlet",
          formData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        );

      } else {

        // ACTUALIZAR
        formData.append("id", id);

        await api.post(
          "/ActualizarVeterinarioServlet",
          formData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        );
      }

      // LIMPIAR
      setId("");
      setNombre("");
      setEspecialidad("");
      setTelefono("");

      // RECARGAR
      cargarDatos();

      alert("Proceso realizado correctamente");

    } catch (error) {

      console.error("Error:", error);

      alert("Error en el proceso");
    }
  };

  return (

    <>

      <Navbar />

      <Container sx={{ mt: 4 }}>

        <Typography variant="h4" gutterBottom>
          Gestión de Veterinarios
        </Typography>

        {/* FORMULARIO */}

        <Box
          component="form"
          onSubmit={guardar}
          sx={{ mb: 4 }}
        >

          <TextField
            label="Nombre"
            fullWidth
            required
            sx={{ mb: 2 }}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <TextField
            label="Especialidad"
            fullWidth
            required
            sx={{ mb: 2 }}
            value={especialidad}
            onChange={(e) => setEspecialidad(e.target.value)}
          />

          <TextField
            label="Teléfono"
            fullWidth
            required
            sx={{ mb: 2 }}
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
          >
            {id === "" ? "Guardar Veterinario" : "Actualizar Veterinario"}
          </Button>

        </Box>

        {/* TABLA */}

        <Tabla
          datos={datos}
          refrescar={cargarDatos}
          onEditar={editarVeterinario}
          tipo="veterinario"
        />

      </Container>

    </>
  );
}

export default Veterinarios;