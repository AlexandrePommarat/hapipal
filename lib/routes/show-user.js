'use strict';

module.exports = {
    method: 'GET',
    path: '/users',
    options: {
        handler: async (request, h) => {
          const { User } = request.models()
          const user = await User.query();
          return h.response(user);
        },
        tags:['api']
    }
};
