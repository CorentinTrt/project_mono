# TO-DO

## Main objective

### Implement Opentelemetry with Opentracing

- Create a reusable system to be shared to every node services / libs
- Create an agnostic exporter implementation to be able to switch between different exporters
- Create a cross service spanner implementation to be able to keep a complete trace

## Global

- [ ] Create an omitter to prevent some data to be send to client

## @mono/bff/web

- [x] Create an interface for get user service (use json schema + schema validation)
- [x] Create an interface for get user service response
- [x] Create a normalized client for gRPC
- [x] Create client call to @mono/users-service to get a user

## @mono/users-service

- [x] Create fake DB in JS
- [x] Create logic to retrieve a user based on its `userId`
- [x] Create errors management
