package controlador;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import modelo.Mascota;
import dao.MascotaDAO;

@WebServlet("/MascotaServlet")
public class MascotaServlet extends HttpServlet {

    MascotaDAO dao = new MascotaDAO();

@Override
protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {

    request.setCharacterEncoding("UTF-8");

    String nombre = request.getParameter("nombre");
    String especie = request.getParameter("especie");
    String raza = request.getParameter("raza");

    int edad = 0;
    try {
        edad = Integer.parseInt(request.getParameter("edad"));
    } catch (Exception e) {
        edad = 0;
    }

    Mascota m = new Mascota(0, nombre, especie, raza, edad);

    dao.insertar(m);

    request.setAttribute("lista", dao.listar());
    request.getRequestDispatcher("index.jsp").forward(request, response);
}
   @Override
protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {

    request.setAttribute("lista", dao.listar());
    request.getRequestDispatcher("index.jsp").forward(request, response);
    }
}