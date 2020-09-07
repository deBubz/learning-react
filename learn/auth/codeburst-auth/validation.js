const { required } = require("joi");

const Joi = require("hapi");

const registerValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(6).max(255).required(),
        email: Joi.string().min(6).max(255).required(),
        password: Joi.string().min(6).max(1024).required(),
    });

    return schema.validate(data);
}

module.exports = {
    registerValidation
}