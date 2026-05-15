package dao;

import config.Conexion;
import modelo.Usuario;
import java.sql.*;
import java.util.*;

public class UsuarioDAO {
    Connection con;
    PreparedStatement ps;
    ResultSet rs;

    public boolean insertar(Usuario u){
        String sql="INSERT INTO usuario(username,password,rol) VALUES(?,?,?)";
        try{
            con=Conexion.getConnection();
            ps=con.prepareStatement(sql);
            ps.setString(1,u.getUsername());
            ps.setString(2,u.getPassword());
            ps.setString(3,u.getRol());
            ps.executeUpdate();
            return true;
        }catch(SQLException e){
            System.out.println(e.getMessage());
            return false;
        }
    }

    public List<Usuario> listar(){
        List<Usuario> lista=new ArrayList<>();
        String sql="SELECT * FROM usuario";
        try{
            con=Conexion.getConnection();
            ps=con.prepareStatement(sql);
            rs=ps.executeQuery();
            while(rs.next()){
                Usuario u=new Usuario();
                u.setId(rs.getInt("id"));
                u.setUsername(rs.getString("username"));
                u.setPassword(rs.getString("password"));
                u.setRol(rs.getString("rol"));
                lista.add(u);
            }
        }catch(SQLException e){
            System.out.println(e.getMessage());
        }
        return lista;
    }
}
