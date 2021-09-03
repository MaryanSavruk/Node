const Joi = require('joi');

const { CURENT_YEAR, EMAIL_REGEXP, PASSWORD_REGEXP } = require('../config/constants');
const userRoleEnum = require('../config/user-role-enum');

const girlValidator = Joi.object({
    name: Joi.string(),
    age: Joi.number().min(15).max(60)
});

const createUserValidator = Joi.object({
    name: Joi.string().alphanum().min(2).max(30)
        .trim()
        .required(),
    password: Joi.string().regex(PASSWORD_REGEXP).required(),
    born_year: Joi.number().min(CURENT_YEAR - 120).max(CURENT_YEAR - 6),
    email: Joi.string().regex(EMAIL_REGEXP).trim().required(),
    // password: Joi.string().alphanum().min(8).max(128),
    role: Joi.string().allow(...Object.values(userRoleEnum)),

    car: Joi.boolean(),

    girl: Joi.array()
        .items(girlValidator)
        .when('car', { is: true, then: Joi.required() })
});
// https://youtu.be/NO8rRUk_G_I?t=2339
const updateUserValidator = Joi.object({
    name: Joi.string().alphanum().min(2).max(30),
    email: Joi.string().regex(EMAIL_REGEXP)
});

module.exports = {
    createUserValidator,
    updateUserValidator
};
