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

function Diagnosticos() {

  // LISTA
  const [datos, setDatos] = useState([]);

  // FORMULARIO
  const [id, setId] = useState("");
  const [mascota_id, setMascotaId] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tratamiento, setTratamiento] = useState("");
  const [fecha, setFecha] = useState("");

  // CARGAR DATOS
  const cargarDatos = async () => {

    try {

      const response = await api.get("/DiagnosticoApiServlet");

      setDatos(response.data);

    } catch (error) {

      console.error("Error cargar diagnósticos:", error);
    }
  };

  useEffect(() => {

    cargarDatos();

  }, []);

  // EDITAR
  const editarDiagnostico = (item) => {

    setId(item.id);
    setMascotaId(item.mascota_id);
    setDescripcion(item.descripcion);
    setTratamiento(item.tratamiento);
    setFecha(item.fecha);
  };

  // GUARDAR / ACTUALIZAR
  const guardar = async (e) => {

    e.preventDefault();

    try {

      const formData = new URLSearchParams();

      formData.append("mascota_id", mascota_id);
      formData.append("descripcion", descripcion);
      formData.append("tratamiento", tratamiento);
      formData.append("fecha", fecha);

      // INSERTAR
      if (id === "") {

        await api.post(
          "/DiagnosticoServlet",
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
          "/ActualizarDiagnosticoServlet",
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
      setDescripcion("");
      setTratamiento("");
      setFecha("");

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
          Gestión de Diagnósticos
        </Typography>

        {/* FORMULARIO */}

        <Box
          component="form"
          onSubmit={guardar}
          sx={{ mb: 4 }}
        >

          <TextField
            label="ID Mascota"
            type="number"
            fullWidth
            margin="normal"
            value={mascota_id}
            onChange={(e) => setMascotaId(e.target.value)}
            required
          />

          <TextField
            label="Descripción"
            fullWidth
            margin="normal"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />

          <TextField
            label="Tratamiento"
            fullWidth
            margin="normal"
            value={tratamiento}
            onChange={(e) => setTratamiento(e.target.value)}
            required
          />

          <TextField
            label="Fecha"
            type="date"
            fullWidth
            margin="normal"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            InputLabelProps={{
              shrink: true
            }}
            required
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
          >
            {id === "" ? "Guardar Diagnóstico" : "Actualizar Diagnóstico"}
          </Button>

        </Box>

        {/* TABLA */}

        <Tabla
          datos={datos}
          refrescar={cargarDatos}
          onEditar={editarDiagnostico}
          tipo="diagnostico"
        />

      </Container>

    </>
  );
}

export default Diagnosticos;