const loginRouter = require("express").Router();
const user = require('../models/user');


loginRouter.post('/', async (request, response) => {
    const { email, password } = request.body;
    const userExist = await UserActivation.find({ email })
    console.log(userExist);
    // console.log(email, password);

    if (!userExist) {
        return response.status(400).json('Email o contraseña invalida');
    }

    if (!userExist.verified) {
        return response.status(400).json('Tu imail no ha sido verificado');
    }

    const saltRounds = 10;
    const isCorrect = await bcrypt(password, saltRounds);
});



module.exports = loginRouter;