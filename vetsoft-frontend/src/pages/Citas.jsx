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

function Citas() {

  // LISTA
  const [datos, setDatos] = useState([]);

  // FORMULARIO
  const [id, setId] = useState("");

  const [mascota_id, setMascotaId] = useState("");
  const [propietario_id, setPropietarioId] = useState("");
  const [veterinario_id, setVeterinarioId] = useState("");

  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [motivo, setMotivo] = useState("");

  // CARGAR DATOS
  const cargarDatos = async () => {

    try {

      const response = await api.get("/CitaApiServlet");

      setDatos(response.data);

    } catch (error) {

      console.error("Error cargar citas:", error);
    }
  };

  useEffect(() => {

    cargarDatos();

  }, []);

  // EDITAR
  const editarCita = (item) => {

    setId(item.id);

    setMascotaId(item.mascota_id);
    setPropietarioId(item.propietario_id);
    setVeterinarioId(item.veterinario_id);

    setFecha(item.fecha);
    setHora(item.hora);
    setMotivo(item.motivo);
  };

  // GUARDAR / ACTUALIZAR
  const guardar = async (e) => {

    e.preventDefault();

    try {

      const formData = new URLSearchParams();

      formData.append("mascota_id", mascota_id);
      formData.append("propietario_id", propietario_id);
      formData.append("veterinario_id", veterinario_id);

      formData.append("fecha", fecha);
      formData.append("hora", hora);
      formData.append("motivo", motivo);

      // INSERTAR
      if (id === "") {

        await api.post(
          "/CitaServlet",
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
          "/ActualizarCitaServlet",
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

      setMascotaId("");
      setPropietarioId("");
      setVeterinarioId("");

      setFecha("");
      setHora("");
      setMotivo("");

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
          Gestión de Citas
        </Typography>

        {/* FORMULARIO */}

        <Box
          component="form"
          onSubmit={guardar}
          sx={{ mb: 4 }}
        >

          <TextField
            label="ID Mascota"
            fullWidth
            required
            sx={{ mb: 2 }}
            value={mascota_id}
            onChange={(e) => setMascotaId(e.target.value)}
          />

          <TextField
            label="ID Propietario"
            fullWidth
            required
            sx={{ mb: 2 }}
            value={propietario_id}
            onChange={(e) => setPropietarioId(e.target.value)}
          />

          <TextField
            label="ID Veterinario"
            fullWidth
            required
            sx={{ mb: 2 }}
            value={veterinario_id}
            onChange={(e) => setVeterinarioId(e.target.value)}
          />

          <TextField
            label="Fecha"
            type="date"
            fullWidth
            required
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />

          <TextField
            label="Hora"
            type="time"
            fullWidth
            required
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />

          <TextField
            label="Motivo"
            fullWidth
            required
            sx={{ mb: 2 }}
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
          >
            {id === "" ? "Guardar Cita" : "Actualizar Cita"}
          </Button>

        </Box>

        {/* TABLA */}

        <Tabla
          datos={datos}
          refrescar={cargarDatos}
          onEditar={editarCita}
          tipo="cita"
        />

      </Container>

    </>
  );
}

export default Citas;