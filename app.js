 require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');
const mongodb = require('mongodb');
const loginRouter = require('./controllers/login');
const { userExtractor } = require('./middleware/auth');


(async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI_TEST);  
        console.log('Conectado a MongoDB');     
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }    
})();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Rutas frontend
app.use('/', express.static(path.resolve('views','home')));
app.use('/signup', express.static(path.resolve('views','signup')));
app.use('/login', express.static(path.resolve('views','login')));
app.use('/components', express.static(path.resolve('views','components')));
app.use('/imag', express.static(path.resolve('imag')));
app.use('/verify/:id/:token', express.static(path.resolve('views','verify')));
//app.use('/todos', express.static(path.resolve('views', 'todos')));

app.use(morgan('tiny'));


//Rutas backend
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
//app.use('/api/todos', userExtractor, todosRouter);
 



module.exports = app;
