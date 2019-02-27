'use strict';
const Joi = require('joi');
module.exports = {
    method: 'PUT',
    path: '/user/{id}',
    options: {
        handler: async (request, h) => {
          const { User } = request.models()
          const updatedUser = await User
          .query()
          .patchAndFetchById(request.params.id,{
            login: request.payload.login,
            password: request.payload.password ,
            email: request.payload.email ,
            firstname: request.payload.firstname,
            lastname:request.payload.lastname,
            company:request.payload.company,
            function:request.payload.function,
            updated_at: new Date()})
          updatedUser.created_at= new Date();
          return h.response(updatedUser)
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
          }),
          params: Joi.object({
               id: Joi.number().integer().required(),
            })
        }
      }
    };
