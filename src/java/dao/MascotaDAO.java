package dao;

import config.Conexion;
import modelo.Mascota;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MascotaDAO {

    Connection con;
    PreparedStatement ps;
    ResultSet rs;

    // INSERTAR
    public boolean insertar(Mascota m) {

        String sql = "INSERT INTO mascota(nombre, especie, raza, edad) VALUES (?, ?, ?, ?)";

        try {
            con = Conexion.getConnection();
            ps = con.prepareStatement(sql);

            ps.setString(1, m.getNombre());
            ps.setString(2, m.getEspecie());
            ps.setString(3, m.getRaza());
            ps.setInt(4, m.getEdad());

            ps.executeUpdate();
            return true;

        } catch (SQLException ex) {
            System.out.println("Error al insertar: " + ex.getMessage());
            return false;

        } finally {
            cerrar();
        }
    }

    // LISTAR
    public List<Mascota> listar() {

        List<Mascota> lista = new ArrayList<>();
        String sql = "SELECT * FROM mascota";

        try {
            con = Conexion.getConnection();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();

            while (rs.next()) {

                Mascota m = new Mascota();

                m.setId(rs.getInt("id"));
                m.setNombre(rs.getString("nombre"));
                m.setEspecie(rs.getString("especie"));
                m.setRaza(rs.getString("raza"));
                m.setEdad(rs.getInt("edad"));

                lista.add(m);
            }

        } catch (SQLException e) {
            System.out.println("Error al consultar: " + e.getMessage());

        } finally {
            cerrar();
        }

        return lista;
    }

    // ACTUALIZAR
    public boolean actualizar(Mascota m) {

        String sql = "UPDATE mascota SET nombre=?, especie=?, raza=?, edad=? WHERE id=?";

        try {
            con = Conexion.getConnection();
            ps = con.prepareStatement(sql);

            ps.setString(1, m.getNombre());
            ps.setString(2, m.getEspecie());
            ps.setString(3, m.getRaza());
            ps.setInt(4, m.getEdad());
            ps.setInt(5, m.getId());

            ps.executeUpdate();
            return true;

        } catch (SQLException ex) {
            System.out.println("Error al actualizar: " + ex.getMessage());
            return false;

        } finally {
            cerrar();
        }
    }

    // ELIMINAR
    public boolean eliminar(int id) {

        String sql = "DELETE FROM mascota WHERE id=?";

        try {
            con = Conexion.getConnection();
            ps = con.prepareStatement(sql);

            ps.setInt(1, id);

            ps.executeUpdate();
            return true;

        } catch (SQLException ex) {
            System.out.println("Error al eliminar: " + ex.getMessage());
            return false;

        } finally {
            cerrar();
        }
    }

    // 🔒 MÉTODO PARA CERRAR CONEXIONES (MEJOR PRÁCTICA)
    private void cerrar() {
        try {
            if (rs != null) rs.close();
            if (ps != null) ps.close();
            if (con != null) con.close();
        } catch (SQLException e) {
            System.out.println("Error al cerrar recursos: " + e.getMessage());
        }
    }
}
