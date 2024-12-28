import Fastify, { FastifyInstance } from 'fastify';
import fs from 'fs';
import path from 'path';

const ENV = process.env.ENV ?? 'local';

const SERVER_OPTIONS = {
  logger: true,
  http2: ENV === 'local' ? false : true,
  https:
    ENV === 'local'
      ? null
      : {
          key: fs.readFileSync(
            path.join(__dirname, '..', 'https', 'fastify.key')
          ),
          cert: fs.readFileSync(
            path.join(__dirname, '..', 'https', 'fastify.cert')
          ),
        },
};

const getServer = (): FastifyInstance => {
  return Fastify(SERVER_OPTIONS);
};

export { getServer };
