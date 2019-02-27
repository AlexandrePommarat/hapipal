'use strict';
const Joi = require('joi');
module.exports = {
    method: 'POST',
    path: '/user',
    options: {
        handler: async (request, h) => {
          const { User } = request.models()
          const newUser = await User
          .query()
          .insert({
            login: request.payload.login,
            password: request.payload.password ,
            email: request.payload.email ,
            firstname: request.payload.firstname,
            lastname:request.payload.lastname,
            company:request.payload.company,
            function:request.payload.function,
            created_at: new Date()})
          newUser.created_at= new Date();
          return h.response(newUser)
        },
        tags:['api'],
        validate: {
           payload: Joi.object({
                login: Joi.string().required(),
                password: Joi.string().alphanum().required(),
                email: Joi.string().email().required(),
                firstname: Joi.string().required(),
                lastname: Joi.string().required(),
                username: Joi.string().required(),
                company: Joi.string().required(),
                function:  Joi.string().required()
             })
        }
      }
    };
