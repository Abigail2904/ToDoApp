const usersRouter = require('express').Router();

usersRouter.post('/', async (request, response) => {
    const { name, email, password } = request.body;
    
    if (!name || !email || !password) {
        console.log('Campos faltantes en POST /api/users');
        return response.status(400).json({ error: 'todos los espacios son requeridos' });
    } 

});

module.exports = usersRouter;
