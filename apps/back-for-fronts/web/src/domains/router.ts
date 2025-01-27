import AutoLoad from '@fastify/autoload';
import * as path from 'path';

import type { FastifyInstance } from 'fastify';

type AppOptions = object;

const router = async (fastify: FastifyInstance, opts: AppOptions) => {
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, './'),
    indexPattern: /^.*\/.*\.routes\.ts$/,
    options: { ...opts, prefix: '/web' },
  });
};

export { AppOptions, router };
