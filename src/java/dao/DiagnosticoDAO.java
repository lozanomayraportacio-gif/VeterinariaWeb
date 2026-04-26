package dao;

import config.Conexion;
import modelo.Diagnostico;
import java.sql.*;
import java.util.*;

public class DiagnosticoDAO {
    Connection con;
    PreparedStatement ps;
    ResultSet rs;

    public boolean insertar(Diagnostico d){
        String sql="INSERT INTO diagnostico(mascota_id,descripcion,tratamiento,fecha) VALUES(?,?,?,?)";
        try{
            con=Conexion.getConnection();
            ps=con.prepareStatement(sql);
            ps.setInt(1,d.getMascota_id());
            ps.setString(2,d.getDescripcion());
            ps.setString(3,d.getTratamiento());
            ps.setString(4,d.getFecha());
            ps.executeUpdate();
            return true;
        }catch(SQLException e){
            System.out.println(e.getMessage());
            return false;
        }
    }

    public List<Diagnostico> listar(){
        List<Diagnostico> lista=new ArrayList<>();
        String sql="SELECT * FROM diagnostico";
        try{
            con=Conexion.getConnection();
            ps=con.prepareStatement(sql);
            rs=ps.executeQuery();
            while(rs.next()){
                Diagnostico d=new Diagnostico();
                d.setId(rs.getInt("id"));
                d.setMascota_id(rs.getInt("mascota_id"));
                d.setDescripcion(rs.getString("descripcion"));
                d.setTratamiento(rs.getString("tratamiento"));
                d.setFecha(rs.getString("fecha"));
                lista.add(d);
            }
        }catch(SQLException e){
            System.out.println(e.getMessage());
        }
        return lista;
    }
}