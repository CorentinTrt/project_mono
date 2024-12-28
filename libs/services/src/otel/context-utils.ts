import { Metadata } from '@grpc/grpc-js';
import {
  propagation,
  context,
  Context,
  TextMapGetter,
} from '@opentelemetry/api';

interface ContextCarrier {
  traceparent: string;
}

const extractOtelCtx = (
  inputCtx: Metadata | ContextCarrier,
  textMapGetter: TextMapGetter
): Context => {
  return propagation.extract(context.active(), inputCtx, textMapGetter);
};

const propagateCtxForGRPC = () => {
  const metadata = new Metadata();
  propagation.inject(context.active(), metadata, {
    set: (metadata, key, value) => metadata.set(key, value),
  });
  return metadata;
};

export { extractOtelCtx, propagateCtxForGRPC };
