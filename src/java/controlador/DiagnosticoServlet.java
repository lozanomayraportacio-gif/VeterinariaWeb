package controlador;

import dao.DiagnosticoDAO;
import modelo.Diagnostico;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.util.List;

@WebServlet("/DiagnosticoServlet")
public class DiagnosticoServlet extends HttpServlet {

    DiagnosticoDAO dao = new DiagnosticoDAO();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        int mascota_id = Integer.parseInt(request.getParameter("mascota_id"));
        String descripcion = request.getParameter("descripcion");
        String tratamiento = request.getParameter("tratamiento");
        String fecha = request.getParameter("fecha");

        Diagnostico d = new Diagnostico(0, mascota_id, descripcion, tratamiento, fecha);
        dao.insertar(d);

        request.setAttribute("lista", dao.listar());
        request.getRequestDispatcher("diagnostico.jsp").forward(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        List<Diagnostico> lista = dao.listar();
        request.setAttribute("lista", lista);
        request.getRequestDispatcher("diagnostico.jsp").forward(request, response);
    }
}
