require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');


(async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI_TEST);  
        console.log('Conectado a MongoDB');     
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }    
})();


//Rutas frontend
app.use('/', express.static(path.resolve('views','home')));
app.use('/signup', express.static(path.resolve('views','signup')));
app.use('/login', express.static(path.resolve('views','login')));
app.use('/components', express.static(path.resolve('views','components')));
app.use('/imag', express.static(path.resolve('imag')));


//Rutas backend
// app.use('/api/users', usersRouter);
// app.use('/api/login', loginRouter);


module.exports = app;
