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

function Propietarios() {

  // LISTA
  const [datos, setDatos] = useState([]);

  // FORMULARIO
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");

  // LISTAR
  const cargarDatos = () => {

    api.get("/PropietarioApiServlet")
      .then((response) => {

        setDatos(response.data);

      })
      .catch((error) => {

        console.error("Error:", error);
      });
  };

  useEffect(() => {

    cargarDatos();

  }, []);

  // EDITAR
  const editarPropietario = (item) => {

    setId(item.id);
    setNombre(item.nombre);
    setTelefono(item.telefono);
    setCorreo(item.correo);
  };

  // GUARDAR / ACTUALIZAR
  const guardar = async (e) => {

    e.preventDefault();

    try {

      const formData = new URLSearchParams();

      formData.append("nombre", nombre);
      formData.append("telefono", telefono);
      formData.append("correo", correo);

      // INSERTAR
      if (id === "") {

        await api.post(
          "/PropietarioServlet",
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
          "/ActualizarPropietarioServlet",
          formData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        );
      }

      // LIMPIAR CAMPOS
      setId("");
      setNombre("");
      setTelefono("");
      setCorreo("");

      // RECARGAR TABLA
      cargarDatos();

      alert("Proceso realizado correctamente");

    } catch (error) {

      console.error("Error al guardar:", error);

      alert("Error en el proceso");
    }
  };

  return (
    <>

      <Navbar />

      <Container sx={{ mt: 4 }}>

        <Typography variant="h4" gutterBottom>
          Gestión de Propietarios
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
            label="Teléfono"
            fullWidth
            required
            sx={{ mb: 2 }}
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />

          <TextField
            label="Correo"
            fullWidth
            required
            sx={{ mb: 2 }}
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
          >
            {id === "" ? "Guardar" : "Actualizar"}
          </Button>

        </Box>

        {/* TABLA */}

        <Tabla
          datos={datos}
          refrescar={cargarDatos}
          onEditar={editarPropietario}
          tipo="propietario"
        />

      </Container>

    </>
  );
}

export default Propietarios;