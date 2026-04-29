<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    String usuario = (String) session.getAttribute("usuario");
    String rol = (String) session.getAttribute("rol");

    if (usuario == null) {
        response.sendRedirect("login.jsp");
        return;
    }
%>

<!DOCTYPE html>
<html>
<head>
    <title>VetSoft</title>
</head>
<body>

<h1>VetSoft - Sistema Veterinario</h1>

<h3>Bienvenido: <%= usuario %> | Rol: <%= rol %></h3>

<ul>

<%
    if ("administrador".equals(rol)) {
%>
        <li><a href="MascotaServlet">Mascotas</a></li>
        <li><a href="PropietarioServlet">Propietarios</a></li>
        <li><a href="VeterinarioServlet">Veterinarios</a></li>
        <li><a href="CitaServlet">Citas</a></li>
        <li><a href="DiagnosticoServlet">Diagnósticos</a></li>

<%
    } else if ("veterinario".equals(rol)) {
%>
        <li><a href="CitaServlet">Citas</a></li>
        <li><a href="DiagnosticoServlet">Diagnósticos</a></li>

<%
    } else if ("propietario".equals(rol)) {
%>
        <li><a href="MascotaServlet">Mascotas</a></li>
        <li><a href="CitaServlet">Citas</a></li>

<%
    }
%>

</ul>

<br>
<a href="login.jsp">Cerrar sesión</a>

</body>
</html>