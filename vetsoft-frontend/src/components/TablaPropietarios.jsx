import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from "@mui/material";

import api from "../services/api";

function TablaPropietarios({ datos, refrescar }) {

  // ELIMINAR PROPIETARIO
  const eliminar = async (id) => {
    try {
      await api.delete(`/PropietarioApiServlet?id=${id}`);
      if (refrescar) refrescar();
      else window.location.reload();
    } catch (error) {
      console.error("Error al eliminar propietario:", error);
    }
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>

        <TableHead>
          <TableRow>
            <TableCell><strong>ID</strong></TableCell>
            <TableCell><strong>Nombre</strong></TableCell>
            <TableCell><strong>Teléfono</strong></TableCell>
            <TableCell><strong>Correo</strong></TableCell>
            <TableCell><strong>Acciones</strong></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

          {(datos || []).map((item) => (
            <TableRow key={item.id}>

              <TableCell>{item.id}</TableCell>
              <TableCell>{item.nombre}</TableCell>
              <TableCell>{item.telefono}</TableCell>
              <TableCell>{item.correo}</TableCell>

              <TableCell>

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

export default TablaPropietarios;