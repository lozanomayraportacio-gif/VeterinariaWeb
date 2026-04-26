package config;

import java.sql.Connection;
import java.sql.DriverManager;

public class Conexion {

    public static Connection getConnection() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3307/veterinaria?useSSL=false&serverTimezone=UTC",
                "root",
                ""
            );

            System.out.println("✔ CONEXIÓN EXITOSA");
            return con;

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
