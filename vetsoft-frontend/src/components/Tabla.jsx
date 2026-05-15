import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
  Button
} from "@mui/material";

import api from "../services/api";

function Tabla({ datos, refrescar, onEditar, tipo }) {

  // ELIMINAR
  const eliminar = async (id) => {

    try {

      // MASCOTAS
      if (tipo === "mascota") {
        await api.get(`/EliminarMascotaServlet?id=${id}`);
      }

      // PROPIETARIOS
      if (tipo === "propietario") {
        await api.get(`/EliminarPropietarioServlet?id=${id}`);
      }

      // VETERINARIOS
      if (tipo === "veterinario") {
        await api.get(`/EliminarVeterinarioServlet?id=${id}`);
      }

      // CITAS
      if (tipo === "cita") {
        await api.get(`/EliminarCitaServlet?id=${id}`);
      }

      // DIAGNOSTICOS
      if (tipo === "diagnostico") {
        await api.get(`/EliminarDiagnosticoServlet?id=${id}`);
      }

      if (refrescar) {
        refrescar();
      }

    } catch (error) {

      console.error("Error eliminar:", error);
    }
  };

  return (

    <TableContainer
      component={Paper}
      sx={{
        mt: 3,
        overflowX: "auto"
      }}
    >

      <Table>

        <TableHead>

          <TableRow>

            <TableCell><strong>ID</strong></TableCell>

            {/* MASCOTAS */}
            {tipo === "mascota" && (
              <>
                <TableCell><strong>Nombre</strong></TableCell>
                <TableCell><strong>Especie</strong></TableCell>
                <TableCell><strong>Raza</strong></TableCell>
                <TableCell><strong>Edad</strong></TableCell>
              </>
            )}

            {/* PROPIETARIOS */}
            {tipo === "propietario" && (
              <>
                <TableCell><strong>Nombre</strong></TableCell>
                <TableCell><strong>Teléfono</strong></TableCell>
                <TableCell><strong>Correo</strong></TableCell>
              </>
            )}

            {/* VETERINARIOS */}
            {tipo === "veterinario" && (
              <>
                <TableCell><strong>Nombre</strong></TableCell>
                <TableCell><strong>Especialidad</strong></TableCell>
                <TableCell><strong>Teléfono</strong></TableCell>
              </>
            )}

            {/* CITAS */}
            {tipo === "cita" && (
              <>
                <TableCell><strong>ID Mascota</strong></TableCell>
                <TableCell><strong>ID Propietario</strong></TableCell>
                <TableCell><strong>ID Veterinario</strong></TableCell>
                <TableCell><strong>Fecha</strong></TableCell>
                <TableCell><strong>Hora</strong></TableCell>
                <TableCell><strong>Motivo</strong></TableCell>
              </>
            )}

            {/* DIAGNOSTICOS */}
            {tipo === "diagnostico" && (
              <>
                <TableCell><strong>ID Mascota</strong></TableCell>
                <TableCell><strong>Descripción</strong></TableCell>
                <TableCell><strong>Tratamiento</strong></TableCell>
                <TableCell><strong>Fecha</strong></TableCell>
              </>
            )}

            <TableCell><strong>Acciones</strong></TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {(datos || []).map((item) => (

            <TableRow key={item.id}>

              <TableCell>{item.id}</TableCell>

              {/* MASCOTAS */}
              {tipo === "mascota" && (
                <>
                  <TableCell>{item.nombre}</TableCell>
                  <TableCell>{item.especie}</TableCell>
                  <TableCell>{item.raza}</TableCell>
                  <TableCell>{item.edad}</TableCell>
                </>
              )}

              {/* PROPIETARIOS */}
              {tipo === "propietario" && (
                <>
                  <TableCell>{item.nombre}</TableCell>
                  <TableCell>{item.telefono}</TableCell>
                  <TableCell>{item.correo}</TableCell>
                </>
              )}

              {/* VETERINARIOS */}
              {tipo === "veterinario" && (
                <>
                  <TableCell>{item.nombre}</TableCell>
                  <TableCell>{item.especialidad}</TableCell>
                  <TableCell>{item.telefono}</TableCell>
                </>
              )}

              {/* CITAS */}
              {tipo === "cita" && (
                <>
                  <TableCell>{item.mascota_id}</TableCell>
                  <TableCell>{item.propietario_id}</TableCell>
                  <TableCell>{item.veterinario_id}</TableCell>
                  <TableCell>{item.fecha}</TableCell>
                  <TableCell>{item.hora}</TableCell>
                  <TableCell>{item.motivo}</TableCell>
                </>
              )}

              {/* DIAGNOSTICOS */}
              {tipo === "diagnostico" && (
                <>
                  <TableCell>{item.mascota_id}</TableCell>
                  <TableCell>{item.descripcion}</TableCell>
                  <TableCell>{item.tratamiento}</TableCell>
                  <TableCell>{item.fecha}</TableCell>
                </>
              )}

              <TableCell>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mr: 1 }}
                  onClick={() => onEditar && onEditar(item)}
                >
                  Editar
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  onClick={() => eliminar(item.id)}
                >
                  Eliminar
                </Button>

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

    </TableContainer>
  );
}

export default Tabla;