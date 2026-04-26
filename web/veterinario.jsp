<%@page import="java.util.List"%>
<%@page import="modelo.Veterinario"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<html>
<body>

<h1>Veterinarios</h1>

<form action="VeterinarioServlet" method="post">
    Nombre: <input type="text" name="nombre"><br><br>
    Especialidad: <input type="text" name="especialidad"><br><br>
    Teléfono: <input type="text" name="telefono"><br><br>
    <input type="submit" value="Guardar">
</form>

<hr>

<table border="1">
<tr>
    <th>ID</th>
    <th>Nombre</th>
    <th>Especialidad</th>
    <th>Teléfono</th>
</tr>

<%
List<Veterinario> lista2 = (List<Veterinario>) request.getAttribute("lista");
if(lista2 != null){
for(Veterinario v : lista2){
%>
<tr>
<td><%=v.getId()%></td>
<td><%=v.getNombre()%></td>
<td><%=v.getEspecialidad()%></td>
<td><%=v.getTelefono()%></td>
</tr>
<%
}
}
%>

</table>

<br>
<a href="menu.jsp">Volver</a>

</body>
</html>
