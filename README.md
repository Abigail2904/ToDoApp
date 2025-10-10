# ToDoApp

Instrucciones rápidas para ejecutar la aplicación en Windows PowerShell:

1. Instalar dependencias:

```powershell
npm install
```

2. Crear un archivo `.env` en la raíz copiando `.env.example` y rellenando la contraseña de la base de datos.

3. Ejecutar la aplicación en modo desarrollo (requiere `nodemon`, ya está en `dependencies`):

```powershell
npm run dev
```

o ejecutar directamente con node:

```powershell
node index.js
```

Notas:
- Asegúrate de tener Node.js instalado (v18+ recomendado) y acceso a internet para instalar paquetes.
- Si la conexión a Mongo falla, revisa la variable `MONGO_URI_TEST` en `.env`.
