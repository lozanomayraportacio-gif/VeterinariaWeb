package dao;

import config.Conexion;
import modelo.Propietario;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class PropietarioDAO {

    Connection con;
    PreparedStatement ps;
    ResultSet rs;

    public boolean insertar(Propietario p) {

        String sql = "INSERT INTO propietario(nombre, telefono, correo) VALUES (?, ?, ?)";

        try {
            con = Conexion.getConnection();
            ps = con.prepareStatement(sql);

            ps.setString(1, p.getNombre());
            ps.setString(2, p.getTelefono());
            ps.setString(3, p.getCorreo());

            ps.executeUpdate();
            return true;

        } catch (SQLException e) {
            System.out.println("Error insertar propietario: " + e.getMessage());
            return false;

        } finally {
            cerrar();
        }
    }

    public List<Propietario> listar() {

        List<Propietario> lista = new ArrayList<>();
        String sql = "SELECT * FROM propietario";

        try {
            con = Conexion.getConnection();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();

            while (rs.next()) {
                Propietario p = new Propietario();

                p.setId(rs.getInt("id"));
                p.setNombre(rs.getString("nombre"));
                p.setTelefono(rs.getString("telefono"));
                p.setCorreo(rs.getString("correo"));

                lista.add(p);
            }

        } catch (SQLException e) {
            System.out.println("Error listar propietario: " + e.getMessage());

        } finally {
            cerrar();
        }

        return lista;
    }

    private void cerrar() {
        try {
            if (rs != null) rs.close();
            if (ps != null) ps.close();
            if (con != null) con.close();
        } catch (SQLException e) {
            System.out.println("Error cerrar: " + e.getMessage());
        }
    }
}
