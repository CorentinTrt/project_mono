FROM docker.io/node:20-alpine

WORKDIR /app

RUN addgroup --system mono_users-service && \
  adduser --system -G mono_users-service mono_users-service

COPY dist/apps/back-ends/users-service mono_users-service/
RUN chown -R mono_users-service:mono_users-service .

CMD [ "node", "mono_users-service" ]
