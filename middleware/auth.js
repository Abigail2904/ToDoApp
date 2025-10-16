const jwt = require('jsonwebtoken');

const userExtractor = async (request, response, next) => {
    console.log('hola');
};

module.exports = { userExtractor };