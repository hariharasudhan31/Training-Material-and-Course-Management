const Joi = require('joi');

const userValidator = {
    registerUser: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }),
};

module.exports = userValidator;