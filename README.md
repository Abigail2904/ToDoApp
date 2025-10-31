# 📝 ToDo App

## 📌 Descripción

ToDo App es una aplicación web para gestionar tareas personales. Permite a los usuarios registrarse, iniciar sesión, crear, actualizar y eliminar tareas. Cuenta con autenticación segura mediante JWT y verificación de correo electrónico.

---

## 🛠️ Tecnologías utilizadas

### Backend
- Node.js
- Express
- MongoDB
- Mongoose

### Frontend
- HTML
- CSS
- JavaScript (Vanilla JS)

### Autenticación
- JWT
- bcrypt

### Correo electrónico
- Nodemailer

### Otras librerías
- axios
- cookie-parser
- cors
- morgan
- dotenv

---

## 📁 Estructura de carpetas

- /controllers --> Controladores backend (login, logout, users, todos) 
- /models --> Modelos de datos Mongoose (User, Todo) 
- /views --> Archivos frontend (login, signup, todos, verify)
- /components --> Componentes JS reutilizables (e.g., notificaciones)
- /app.js --> Configuración principal de Express
- /index.js --> Servidor HTTP
- /config.js --> Variables de entorno y URLs


## 🔗 Rutas de la API

### Usuarios
- `POST /api/users` → Crear usuario y enviar correo de verificación
- `PATCH /api/users/:id/:token` → Verificar usuario mediante link enviado al correo

### Login
- `POST /api/login` → Iniciar sesión, genera JWT y cookie

### Logout
- `GET /api/logout` → Cerrar sesión, elimina cookie

### Tareas
- `GET /api/todos` → Obtener todas las tareas del usuario autenticado
- `POST /api/todos` → Crear nueva tarea
- `PATCH /api/todos/:id` → Actualizar estado (completada/incompleta)
- `DELETE /api/todos/:id` → Eliminar tarea

> Todas las rutas de tareas requieren autenticación mediante middleware `userExtractor`.
