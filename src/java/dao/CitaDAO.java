package dao;

import config.Conexion;
import modelo.Cita;
import java.sql.*;
import java.util.*;

// Clase DAO encargada de gestionar las operaciones CRUD de la entidad Cita
public class CitaDAO {

    // Variables de conexión a la base de datos
    Connection con;
    PreparedStatement ps;
    ResultSet rs;

    // ==========================
    // INSERTAR CITA
    // ==========================
    public boolean insertar(Cita c) {

        String sql = "INSERT INTO cita(mascota_id, propietario_id, veterinario_id, fecha, hora, motivo) VALUES(?,?,?,?,?,?)";

        try {
            con = Conexion.getConnection(); // Se obtiene la conexión

            if (con == null) {
                System.out.println("❌ ERROR: conexión null");
                return false;
            }

            ps = con.prepareStatement(sql);

            // Se asignan los valores al SQL
            ps.setInt(1, c.getMascota_id());
            ps.setInt(2, c.getPropietario_id());
            ps.setInt(3, c.getVeterinario_id());
            ps.setString(4, c.getFecha());
            ps.setString(5, c.getHora());
            ps.setString(6, c.getMotivo());

            int filas = ps.executeUpdate(); // Ejecuta INSERT

            System.out.println("✔ FILAS INSERTADAS: " + filas);

            return filas > 0;

        } catch (Exception e) {
            System.out.println("❌ ERROR INSERTAR CITA:");
            e.printStackTrace();
            return false;

        } finally {
            cerrar(); // Cierra recursos
        }
    }

    // ==========================
    // LISTAR CITAS
    // ==========================
    public List<Cita> listar() {

        List<Cita> lista = new ArrayList<>();
        String sql = "SELECT * FROM cita";

        try {
            con = Conexion.getConnection();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();

            // Recorre resultados de la BD
            while (rs.next()) {

                Cita c = new Cita();

                c.setId(rs.getInt("id"));
                c.setMascota_id(rs.getInt("mascota_id"));
                c.setPropietario_id(rs.getInt("propietario_id"));
                c.setVeterinario_id(rs.getInt("veterinario_id"));
                c.setFecha(rs.getString("fecha"));
                c.setHora(rs.getString("hora"));
                c.setMotivo(rs.getString("motivo"));

                lista.add(c);
            }

        } catch (Exception e) {
            System.out.println("❌ ERROR LISTAR CITAS:");
            e.printStackTrace();

        } finally {
            cerrar();
        }

        return lista;
    }

    // ==========================
    // ACTUALIZAR CITA
    // ==========================
    public boolean actualizar(Cita c) {

        String sql = "UPDATE cita SET mascota_id=?, propietario_id=?, veterinario_id=?, fecha=?, hora=?, motivo=? WHERE id=?";

        try {
            con = Conexion.getConnection();
            ps = con.prepareStatement(sql);

            ps.setInt(1, c.getMascota_id());
            ps.setInt(2, c.getPropietario_id());
            ps.setInt(3, c.getVeterinario_id());
            ps.setString(4, c.getFecha());
            ps.setString(5, c.getHora());
            ps.setString(6, c.getMotivo());
            ps.setInt(7, c.getId());

            ps.executeUpdate();
            return true;

        } catch (Exception e) {
            System.out.println("❌ ERROR ACTUALIZAR CITA:");
            e.printStackTrace();
            return false;

        } finally {
            cerrar();
        }
    }

    // ==========================
    // ELIMINAR CITA
    // ==========================
    public boolean eliminar(int id) {

        String sql = "DELETE FROM cita WHERE id=?";

        try {
            con = Conexion.getConnection();
            ps = con.prepareStatement(sql);

            ps.setInt(1, id);

            ps.executeUpdate();
            return true;

        } catch (Exception e) {
            System.out.println("❌ ERROR ELIMINAR CITA:");
            e.printStackTrace();
            return false;

        } finally {
            cerrar();
        }
    }

    // ==========================
    // CERRAR CONEXIÓN
    // ==========================
    private void cerrar() {
        try {
            if (rs != null) rs.close();
            if (ps != null) ps.close();
            if (con != null) con.close();
        } catch (SQLException e) {
            System.out.println("Error cerrando recursos: " + e.getMessage());
        }
    }
}