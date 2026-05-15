# 🐾 VetSoft

## Sistema Web de Gestión Veterinaria

**VetSoft** es una aplicación web desarrollada para la administración de procesos clínicos y administrativos de una veterinaria, permitiendo gestionar mascotas, propietarios, veterinarios, citas médicas y diagnósticos de manera organizada.

## 🚀 Tecnologías utilizadas

* Java
* JSP (Java Server Pages)
* Servlets
* JDBC
* MySQL
* Apache Tomcat
* MVC (Modelo - Vista - Controlador)
* Git y GitHub
* HTML5 / CSS3

## 📌 Funcionalidades del sistema

### 🔐 Módulo de acceso

* Inicio de sesión por usuario
* Validación de credenciales desde base de datos
* Manejo de sesiones
* Control de acceso por rol

### 🐶 Módulo Mascotas

* Registrar mascotas
* Listar mascotas registradas
* Consultar información básica

### 👤 Módulo Propietarios

* Registrar propietarios
* Guardar teléfono y correo
* Consultar propietarios registrados

### 👨‍⚕️ Módulo Veterinarios

* Registrar veterinarios
* Especialidad médica
* Información de contacto

### 📅 Módulo Citas

* Programación de citas
* Fecha y hora
* Motivo de consulta
* Asociación mascota / propietario / veterinario

### 🩺 Módulo Diagnóstico

* Registro clínico
* Observaciones médicas
* Seguimiento básico

## 🗄️ Base de datos

Base de datos: `veterinaria`

Tablas principales:

* usuario
* mascota
* propietario
* veterinario
* cita
* diagnostico

## 🧱 Arquitectura implementada

El proyecto fue desarrollado bajo arquitectura **MVC (Modelo – Vista – Controlador)**:

* **Modelo:** clases Java
* **DAO:** acceso a datos con JDBC
* **Controlador:** Servlets
* **Vista:** JSP + HTML + CSS

## ⚙️ Instalación

1. Clonar repositorio
2. Importar proyecto en Apache NetBeans
3. Crear base de datos `veterinaria`
4. Importar archivo `veterinaria.sql`
5. Configurar credenciales en `Conexion.java`
6. Ejecutar en Apache Tomcat
7. Acceder desde navegador

## ✅ Estado del proyecto

✔ Proyecto funcional
✔ Base de datos conectada
✔ Módulos operativos
✔ Versionado en GitHub
✔ Evidencia académica SENA

## 👩‍💻 Autora

**Mayra Leandra Lozano Portacio**
Aprendiz SENA – ADSO
Ficha: **3186632**
