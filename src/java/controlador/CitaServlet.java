package controlador;

import dao.CitaDAO;
import modelo.Cita;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.util.List;

@WebServlet("/CitaServlet")
public class CitaServlet extends HttpServlet {

    CitaDAO dao = new CitaDAO();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        int mascota_id = Integer.parseInt(request.getParameter("mascota_id"));
        int propietario_id = Integer.parseInt(request.getParameter("propietario_id"));
        int veterinario_id = Integer.parseInt(request.getParameter("veterinario_id"));
        String fecha = request.getParameter("fecha");
        String hora = request.getParameter("hora");
        String motivo = request.getParameter("motivo");

        Cita c = new Cita(0, mascota_id, propietario_id, veterinario_id, fecha, hora, motivo);
        dao.insertar(c);

        request.setAttribute("lista", dao.listar());
        request.getRequestDispatcher("cita.jsp").forward(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        List<Cita> lista = dao.listar();
        request.setAttribute("lista", lista);
        request.getRequestDispatcher("cita.jsp").forward(request, response);
    }
}