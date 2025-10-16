const todosRouter = require("express").Router();
const User = require('../models/user');
const Todo = require('../models/todo');


todosRouter.get('/', async (request, response) => {
    const todos = await Todo.find({ user: 'adadsa'});
    return response.status(200).json(todos);
});

module.exports = todosRouter;

