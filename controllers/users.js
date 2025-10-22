const usersRouter = require('express').Router();
const User = require ('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createTestAccount } = require('nodemailer');
const nodemailer = require('nodemailer');


// Obtener todos los usuarios


usersRouter.post('/', async (request, response) => {
    const { name, email, password } = request.body; 
    console.log('datos recibidos en el backend:', name, email, password);
    
    if (!name || !email || !password) {
        return response.status(400).json({ error: 'todos los espacios son requeridos' });
    } 
const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
        name,
        email,
        passwordHash,
    });

    const savedUser = await newUser.save();
     //console.log('usuario guardado:', savedUser);
   const token = jwt.sign({ id: savedUser.id }, process.env.ACCESS_TOKEN_SECRET);
   console.log('token generado:', token);
});

// Exportar el router
module.exports = usersRouter;