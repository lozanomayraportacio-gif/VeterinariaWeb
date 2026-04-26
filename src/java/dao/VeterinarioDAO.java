package dao;

import config.Conexion;
import modelo.Veterinario;
import java.sql.*;
import java.util.*;

public class VeterinarioDAO {
    Connection con;
    PreparedStatement ps;
    ResultSet rs;

    public boolean insertar(Veterinario v){
        String sql="INSERT INTO veterinario(nombre,especialidad,telefono) VALUES(?,?,?)";
        try{
            con=Conexion.getConnection();
            ps=con.prepareStatement(sql);
            ps.setString(1,v.getNombre());
            ps.setString(2,v.getEspecialidad());
            ps.setString(3,v.getTelefono());
            ps.executeUpdate();
            return true;
        }catch(SQLException e){
            System.out.println(e.getMessage());
            return false;
        }
    }

    public List<Veterinario> listar(){
        List<Veterinario> lista=new ArrayList<>();
        String sql="SELECT * FROM veterinario";
        try{
            con=Conexion.getConnection();
            ps=con.prepareStatement(sql);
            rs=ps.executeQuery();
            while(rs.next()){
                Veterinario v=new Veterinario();
                v.setId(rs.getInt("id"));
                v.setNombre(rs.getString("nombre"));
                v.setEspecialidad(rs.getString("especialidad"));
                v.setTelefono(rs.getString("telefono"));
                lista.add(v);
            }
        }catch(SQLException e){
            System.out.println(e.getMessage());
        }
        return lista;
    }
}
