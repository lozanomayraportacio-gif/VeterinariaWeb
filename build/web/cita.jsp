<%@page import="java.util.List"%>
<%@page import="modelo.Cita"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<html>
<body>

<h1>Citas</h1>

<form action="CitaServlet" method="post">
    ID Mascota: <input type="number" name="mascota_id"><br><br>
    ID Propietario: <input type="number" name="propietario_id"><br><br>
    ID Veterinario: <input type="number" name="veterinario_id"><br><br>
    Fecha: <input type="date" name="fecha"><br><br>
    Hora: <input type="time" name="hora"><br><br>
    Motivo: <input type="text" name="motivo"><br><br>
    <input type="submit" value="Guardar">
</form>

<hr>

<table border="1">
<tr>
<th>ID</th>
<th>Mascota</th>
<th>Propietario</th>
<th>Veterinario</th>
<th>Fecha</th>
<th>Hora</th>
<th>Motivo</th>
</tr>

<%
List<Cita> lista3 = (List<Cita>) request.getAttribute("lista");
if(lista3 != null){
for(Cita c : lista3){
%>
<tr>
<td><%=c.getId()%></td>
<td><%=c.getMascota_id()%></td>
<td><%=c.getPropietario_id()%></td>
<td><%=c.getVeterinario_id()%></td>
<td><%=c.getFecha()%></td>
<td><%=c.getHora()%></td>
<td><%=c.getMotivo()%></td>
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