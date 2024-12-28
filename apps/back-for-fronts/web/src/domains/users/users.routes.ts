import { FastifyInstance } from 'fastify';

import { handlerGetUser } from './users.handlers';

export default async (fastify: FastifyInstance) => {
  fastify.route({
    method: 'GET',
    url: '/get-user',
    handler: handlerGetUser,
  });

  fastify.get('/get-users', async () => {
    return {
      message: 'Get multiple users',
    };
  });
};
