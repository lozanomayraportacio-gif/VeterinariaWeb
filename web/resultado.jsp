<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.List"%>
<%@page import="modelo.Mascota"%>

<!DOCTYPE html>
<html>
<head>
    <title>Veterinaria</title>
</head>
<body>

<h2>Registro de Mascotas</h2>

<form action="MascotaServlet" method="post">
    Nombre: <input type="text" name="nombre"><br>
    Especie: <input type="text" name="especie"><br>
    Raza: <input type="text" name="raza"><br>
    Edad: <input type="text" name="edad"><br><br>

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

if (lista != null) {
    for (Mascota m : lista) {
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

</body>
</html>