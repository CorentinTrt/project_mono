import fastifySensible from '@fastify/sensible';

import { ServiceNames } from '@mono/services';
import { router } from './domains/router';
import { getServer } from './web.server';
import { startOtelSDK } from './web.otel';

const HOST = process.env.HOST ?? 'localhost';
const PORT = process.env.PORT ? Number(process.env.PORT) : 4001;
const ENV = process.env.ENV ?? 'local';

startOtelSDK(ServiceNames.BFF_WEB);

const server = getServer();

server.register(fastifySensible);
server.register(router);

const closeGracefully = () => {
  server
    .close()
    .then(() => {
      console.log(
        `\x1b[1;35m bff-web\x1b[0m - Fastify server in ${ENV} mode on ${HOST}:${PORT} has been closed`
      );
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};

server.listen({ port: PORT, host: HOST }, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  } else {
    console.log(
      `\x1b[1;35m bff-web\x1b[0m - Fastify server started in ${ENV} mode on ${HOST}:${PORT}`
    );
  }
});

process.once('SIGINT', closeGracefully);
process.once('SIGTERM', closeGracefully);
