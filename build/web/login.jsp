<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>VetSoft Login</title>
</head>
<body>

<h2>Ingreso al Sistema VetSoft</h2>

<form action="LoginServlet" method="post">
    Usuario:
    <input type="text" name="username" required>
    <br><br>

    Contraseña:
    <input type="password" name="password" required>
    <br><br>

    <input type="submit" value="Ingresar">
</form>

</body>
</html>
