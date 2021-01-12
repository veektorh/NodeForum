
const Joi = require('@hapi/joi');

const create_user_schema = Joi.object({
    username : Joi.string().required().max(30),
    password : Joi.required(),
    email : Joi.string().required().email().max(300)
})

module.exports = {
    create_user_schema
}