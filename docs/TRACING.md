# Logging and Tracing

We are using Opentelemetry to monitor our applications.

## Overall Logic

Otel (Opentelemetry) is logging and monitoring framework.

We can leverage its capabilities to get a unified monitoring system across multiple services.

It is based on Spans and Traces.

[-> explore Otel](https://opentelemetry.io/docs/what-is-opentelemetry/)

### Spans

A span can be considered as an operation in your code.

A span can have a parent Span and multiple child Spans.

[-> explore Spans](https://opentelemetry.io/docs/concepts/observability-primer/#spans)

#### Kinds

**Internal**: Internal spans represent operations which do not cross a process boundary. Things like instrumenting a function call or an Express middleware may use internal spans.
`INTERNAL = 0`

**Server**: A server span represents a synchronous incoming remote call such as an incoming HTTP request or remote procedure call.
`SERVER = 1`

**Client**: A client span represents a synchronous outgoing remote call such as an outgoing HTTP request or database call. Note that in this context, “synchronous” does not refer to async/await, but to the fact that it is not queued for later processing.
`CLIENT = 2`

**Producer**: Producer spans represent the creation of a job which may be asynchronously processed later. It may be a remote job such as one inserted into a job queue or a local job handled by an event listener.
`PRODUCER = 3`

**Consumer**: Consumer spans represent the processing of a job created by a producer and may start long after the producer span has already ended.
`CONSUMER = 4`

### Traces

A trace can be considered as the representation of whole user action.

It will be composed by multiple Spans linked to each other by a context.

[-> explore Traces](https://opentelemetry.io/docs/concepts/observability-primer/#distributed-traces)

## Implementation

### For a service

#### SDK

Each services will need their own instance of the SDK.

This instance will define how the SDK will behave depending of the service that us it.

We must use a singleton pattern for our SDK class because we don't want it to be instanciated multiple times in the same service. That could cause context loss and useless ressources concuption.

#### Entrypoints

Your service will have one or multiple entrypoints. We are defining an entrypoint as the place in your code that handle ingres communications.

To properly manage incoming request and ensuring the propagation of the Trace context, you will need to extract the parent context, create a span with this context and propagate it to the childs Spans.

```typescript
// ts example for http context extraction

// extract the context
const ctxParent = extractOtelCtx({ traceparent: request.headers['traceparent-id'] as string }, defaultTextMapGetter);
// create a new span with this context
const span = tracer.startSpan('<span_name>', {}, ctxParent);

//  propage the context to childs Spans
return context.with(trace.setSpan(context.active(), span), async () => {
  // internal logic
});
```

#### Child Spans

Since the context is propagated automaticaly within a service, you can simply create new child Spans using `tracer.startActiveSpan()`.

```typescript
// ts example

return tracer.startActiveSpan('<span_name>', {}, async (span) => {
  // internal logic
});
```

#### Egres

When calling another service, you will need to propagate the context to this service.

```typescript
// ts example for context propagation to gRPC service

const propagateCtxForGRPC = () => {
  const metadata = new Metadata();
  propagation.inject(context.active(), metadata, {
    set: (metadata, key, value) => metadata.set(key, value),
  });
  return metadata;
};

return new Promise((resolve, reject) => {
  grpcServiceClient.grpcMethod(params, metadata, (error, response) => {
    // internal logic
  });
});
```
