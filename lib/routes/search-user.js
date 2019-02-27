'use strict';
const Joi = require('joi');
const Boom = require('boom');
module.exports = {
    method: 'GET',
    path: '/user/{id}',
    options: {
        handler: async (request, h) => {
          const { User } = request.models()
          const numSearched = await User
          .query()
          .where({
            id: request.params.id
          })

        if(numSearched==0){
          return Boom.notFound('Utilisateur non Trouvé');
        }
        return h.response(numSearched);
        },
        tags:['api'],
        validate: {
           params: Joi.object({
                id: Joi.number().integer().required(),
             })
        }
      }
    };
