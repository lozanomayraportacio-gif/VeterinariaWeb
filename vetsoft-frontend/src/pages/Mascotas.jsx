import React, { useEffect, useState } from "react";

import {
  Typography,
  Container,
  TextField,
  Button,
  Box
} from "@mui/material";

import Tabla from "../components/Tabla";
import Navbar from "../components/Navbar";
import api from "../services/api";

function Mascotas() {

  // LISTA
  const [datos, setDatos] = useState([]);

  // FORMULARIO
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [especie, setEspecie] = useState("");
  const [raza, setRaza] = useState("");
  const [edad, setEdad] = useState("");

  // CARGAR DATOS
  const cargarMascotas = async () => {

    try {

      const response = await api.get("/MascotaApiServlet");

      setDatos(response.data);

    } catch (error) {

      console.error("Error al obtener mascotas:", error);
    }
  };

  useEffect(() => {

    cargarMascotas();

  }, []);

  // EDITAR
  const editarMascota = (item) => {

    setId(item.id);
    setNombre(item.nombre);
    setEspecie(item.especie);
    setRaza(item.raza);
    setEdad(item.edad);
  };

  // GUARDAR / ACTUALIZAR
  const guardarMascota = async (e) => {

    e.preventDefault();

    try {

      const formData = new URLSearchParams();

      formData.append("nombre", nombre);
      formData.append("especie", especie);
      formData.append("raza", raza);
      formData.append("edad", edad);

      // INSERTAR
      if (id === "") {

        await api.post(
          "/MascotaServlet",
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
          "/ActualizarMascotaServlet",
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
      setEspecie("");
      setRaza("");
      setEdad("");

      // RECARGAR TABLA
      cargarMascotas();

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
          Gestión de Mascotas
        </Typography>

        {/* FORMULARIO */}

        <Box
          component="form"
          onSubmit={guardarMascota}
          sx={{ mb: 4 }}
        >

          <TextField
            label="Nombre Mascota"
            fullWidth
            margin="normal"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <TextField
            label="Especie"
            fullWidth
            margin="normal"
            value={especie}
            onChange={(e) => setEspecie(e.target.value)}
            required
          />

          <TextField
            label="Raza"
            fullWidth
            margin="normal"
            value={raza}
            onChange={(e) => setRaza(e.target.value)}
            required
          />

          <TextField
            label="Edad"
            type="number"
            fullWidth
            margin="normal"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
          >
            {id === "" ? "Guardar Mascota" : "Actualizar Mascota"}
          </Button>

        </Box>

        {/* TABLA */}

        <Tabla
          datos={datos}
          refrescar={cargarMascotas}
          onEditar={editarMascota}
          tipo="mascota"
        />

      </Container>

    </>
  );
}

export default Mascotas;