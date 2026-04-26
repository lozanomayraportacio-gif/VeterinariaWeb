package controlador;

import dao.PropietarioDAO;
import modelo.Propietario;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.util.List;

@WebServlet("/PropietarioServlet")
public class PropietarioServlet extends HttpServlet {

    PropietarioDAO dao = new PropietarioDAO();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String nombre = request.getParameter("nombre");
        String telefono = request.getParameter("telefono");
        String correo = request.getParameter("correo");

        Propietario p = new Propietario(0, nombre, telefono, correo);
        dao.insertar(p);

        request.setAttribute("lista", dao.listar());
        request.getRequestDispatcher("propietario.jsp").forward(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        List<Propietario> lista = dao.listar();
        request.setAttribute("lista", lista);
        request.getRequestDispatcher("propietario.jsp").forward(request, response);
    }
}
