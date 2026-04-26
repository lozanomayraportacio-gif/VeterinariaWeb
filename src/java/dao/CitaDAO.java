package dao;

import config.Conexion;
import modelo.Cita;
import java.sql.*;
import java.util.*;

public class CitaDAO {
    Connection con;
    PreparedStatement ps;
    ResultSet rs;

    public boolean insertar(Cita c){
        String sql="INSERT INTO cita(mascota_id,propietario_id,veterinario_id,fecha,hora,motivo) VALUES(?,?,?,?,?,?)";
        try{
            con=Conexion.getConnection();
            ps=con.prepareStatement(sql);
            ps.setInt(1,c.getMascota_id());
            ps.setInt(2,c.getPropietario_id());
            ps.setInt(3,c.getVeterinario_id());
            ps.setString(4,c.getFecha());
            ps.setString(5,c.getHora());
            ps.setString(6,c.getMotivo());
            ps.executeUpdate();
            return true;
        }catch(SQLException e){
            System.out.println(e.getMessage());
            return false;
        }
    }

    public List<Cita> listar(){
        List<Cita> lista=new ArrayList<>();
        String sql="SELECT * FROM cita";
        try{
            con=Conexion.getConnection();
            ps=con.prepareStatement(sql);
            rs=ps.executeQuery();
            while(rs.next()){
                Cita c=new Cita();
                c.setId(rs.getInt("id"));
                c.setMascota_id(rs.getInt("mascota_id"));
                c.setPropietario_id(rs.getInt("propietario_id"));
                c.setVeterinario_id(rs.getInt("veterinario_id"));
                c.setFecha(rs.getString("fecha"));
                c.setHora(rs.getString("hora"));
                c.setMotivo(rs.getString("motivo"));
                lista.add(c);
            }
        }catch(SQLException e){
            System.out.println(e.getMessage());
        }
        return lista;
    }
}
