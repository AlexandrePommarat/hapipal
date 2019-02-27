'use strict';
const Joi = require('joi');
const Boom = require('boom');
module.exports = {
    method: 'DELETE',
    path: '/user/{id}',
    options: {
        handler: async (request, h) => {
          const { User } = request.models()
          const numDeleted = await User
          .query()
          .delete()
          .where({
          id: request.params.id
        })
        if(numDeleted==1){
          return h.response({success:" Utilisateur bien effacé"}).code(204);
        }
        if(numDeleted==0){
          return Boom.notFound('Utilisateur non Trouvé');
        }
        },
        tags:['api'],
        validate: {
           params: Joi.object({
                id: Joi.number().integer().required(),
             })
        }
      }
    };
