package config;

import java.sql.Connection;
import java.sql.DriverManager;

// Clase encargada de manejar la conexión a la base de datos MySQL
public class Conexion {

    // Método que establece la conexión con la base de datos
    public static Connection getConnection() {
        try {
            // Carga el driver de MySQL
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Establece la conexión con la base de datos veterinaria
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3307/veterinaria?useSSL=false&serverTimezone=UTC",
                "root",
                ""
            );

            System.out.println("✔ CONEXIÓN EXITOSA");
            return con;

        } catch (Exception e) {
            System.out.println("❌ Error de conexión: " + e.getMessage());
            return null;
        }
    }
}