FROM docker.io/node:20-alpine

WORKDIR /app

RUN addgroup --system mono_bffs_web && \
  adduser --system -G mono_bffs_web mono_bffs_web

COPY dist/apps/back-for-fronts/web mono_bffs_web/
RUN chown -R mono_bffs_web:mono_bffs_web .

CMD [ "node", "@mono/bffs/web" ]
