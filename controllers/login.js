const loginRouter = require("express").Router();
const user = require('../models/user');
const bcypt = require('bcrypt');
const jwt = require('jsonwebtoken');


loginRouter.post('/', async (request, response) => {
    const { email, password } = request.body;
    const userExist = await UserActivation.find({ email })
     //console.log(userExist);
     //console.log(email, password);

    if (!userExist) {
        return response.status(400).json({ error: 'Email o contraseña invalida'});
    }

    if (!userExist.verified) {
        return response.status(400).json({ error: 'Tu imail no ha sido verificado'});
    }

    const isCorrect = await bcrypt.compare(password, userExist.passwordHash);
    
    if (!isCorrect) {
        return response.status(400).json({ error: 'Email o contraseña invalida'});
    }

    const userForToken = {
        id: userExist.id,
    }


    const accessToken = jwt.sign(userForToken, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: 'Id'
    });


    response.cookie('accessToken', accessToken, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 1),
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true
    });

    return response.sendStatus(200);
});



module.exports = loginRouter;