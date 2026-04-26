package controlador;

import dao.VeterinarioDAO;
import modelo.Veterinario;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.util.List;

@WebServlet("/VeterinarioServlet")
public class VeterinarioServlet extends HttpServlet {

    VeterinarioDAO dao = new VeterinarioDAO();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String nombre = request.getParameter("nombre");
        String especialidad = request.getParameter("especialidad");
        String telefono = request.getParameter("telefono");

        Veterinario v = new Veterinario(0, nombre, especialidad, telefono);
        dao.insertar(v);

        request.setAttribute("lista", dao.listar());
        request.getRequestDispatcher("veterinario.jsp").forward(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        List<Veterinario> lista = dao.listar();
        request.setAttribute("lista", lista);
        request.getRequestDispatcher("veterinario.jsp").forward(request, response);
    }
}
