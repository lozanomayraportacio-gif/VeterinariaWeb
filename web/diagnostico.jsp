<%@page import="java.util.List"%>
<%@page import="modelo.Diagnostico"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<html>
<body>

<h1>Diagnósticos</h1>

<form action="DiagnosticoServlet" method="post">
    ID Mascota: <input type="number" name="mascota_id"><br><br>
    Descripción: <input type="text" name="descripcion"><br><br>
    Tratamiento: <input type="text" name="tratamiento"><br><br>
    Fecha: <input type="date" name="fecha"><br><br>
    <input type="submit" value="Guardar">
</form>

<hr>

<table border="1">
<tr>
<th>ID</th>
<th>ID Mascota</th>
<th>Descripción</th>
<th>Tratamiento</th>
<th>Fecha</th>
</tr>

<%
List<Diagnostico> lista4 = (List<Diagnostico>) request.getAttribute("lista");
if(lista4 != null){
for(Diagnostico d : lista4){
%>
<tr>
<td><%=d.getId()%></td>
<td><%=d.getMascota_id()%></td>
<td><%=d.getDescripcion()%></td>
<td><%=d.getTratamiento()%></td>
<td><%=d.getFecha()%></td>
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
