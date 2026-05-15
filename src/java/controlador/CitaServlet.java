package controlador;

import dao.CitaDAO;
import modelo.Cita;
import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

// Controlador encargado de gestionar las solicitudes del módulo Cita
@WebServlet("/CitaServlet")
public class CitaServlet extends HttpServlet {

    // Instancia del DAO para acceder a la base de datos
    CitaDAO dao = new CitaDAO();

    // ==========================
    // MÉTODO POST: GUARDAR CITA
    // ==========================
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        try {
            // Captura de datos enviados desde el formulario JSP
            int mascota_id = Integer.parseInt(request.getParameter("mascota_id"));
            int propietario_id = Integer.parseInt(request.getParameter("propietario_id"));
            int veterinario_id = Integer.parseInt(request.getParameter("veterinario_id"));
            String fecha = request.getParameter("fecha");
            String hora = request.getParameter("hora");
            String motivo = request.getParameter("motivo");

            // Creación del objeto Cita con los datos recibidos
            Cita c = new Cita(0, mascota_id, propietario_id, veterinario_id, fecha, hora, motivo);

            // Inserción en la base de datos
            boolean guardo = dao.insertar(c);

            // Mensaje en consola para depuración
            if (guardo) {
                System.out.println("✔ CITA GUARDADA CORRECTAMENTE");
            } else {
                System.out.println("❌ ERROR AL GUARDAR CITA");
            }

        } catch (Exception e) {
            System.out.println("❌ ERROR EN POST CITA:");
            e.printStackTrace();
        }

        // Redirección para recargar la lista
        response.sendRedirect("CitaServlet");
    }

    // ==========================
    // MÉTODO GET: LISTAR CITAS
    // ==========================
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Obtiene lista de citas desde la base de datos
        List<Cita> lista = dao.listar();

        // Se envía la lista al JSP
        request.setAttribute("lista", lista);

        // Redirección a la vista
        request.getRequestDispatcher("cita.jsp").forward(request, response);
    }
}