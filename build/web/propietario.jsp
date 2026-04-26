<%@page import="java.util.List"%>
<%@page import="modelo.Propietario"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<html>
<body>

<h1>Propietarios</h1>

<form action="PropietarioServlet" method="post">
    Nombre: <input type="text" name="nombre"><br><br>
    Teléfono: <input type="text" name="telefono"><br><br>
    Correo: <input type="text" name="correo"><br><br>
    <input type="submit" value="Guardar">
</form>

<hr>

<table border="1">
<tr>
    <th>ID</th>
    <th>Nombre</th>
    <th>Teléfono</th>
    <th>Correo</th>
</tr>

<%
List<Propietario> lista = (List<Propietario>) request.getAttribute("lista");
if(lista != null){
for(Propietario p : lista){
%>
<tr>
<td><%=p.getId()%></td>
<td><%=p.getNombre()%></td>
<td><%=p.getTelefono()%></td>
<td><%=p.getCorreo()%></td>
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
