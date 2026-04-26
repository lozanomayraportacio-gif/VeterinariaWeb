<%@page import="java.util.List"%>
<%@page import="modelo.Mascota"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <title>Mascotas</title>
</head>
<body>

<h1>Registro de Mascotas</h1>

<form action="MascotaServlet" method="post">
    Nombre: <input type="text" name="nombre" required><br><br>
    Especie: <input type="text" name="especie" required><br><br>
    Raza: <input type="text" name="raza" required><br><br>
    Edad: <input type="number" name="edad" required><br><br>
    <input type="submit" value="Guardar">
</form>

<hr>

<h2>Lista de Mascotas</h2>

<table border="1">
<tr>
    <th>ID</th>
    <th>Nombre</th>
    <th>Especie</th>
    <th>Raza</th>
    <th>Edad</th>
</tr>

<%
List<Mascota> lista = (List<Mascota>) request.getAttribute("lista");
if(lista != null){
    for(Mascota m : lista){
%>
<tr>
    <td><%=m.getId()%></td>
    <td><%=m.getNombre()%></td>
    <td><%=m.getEspecie()%></td>
    <td><%=m.getRaza()%></td>
    <td><%=m.getEdad()%></td>
</tr>
<%
    }
}
%>

</table>

<br>
<a href="menu.jsp">Volver al menú</a>

</body>
</html>