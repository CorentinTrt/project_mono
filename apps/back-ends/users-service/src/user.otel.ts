import openTelemetryAPI, { Tracer } from '@opentelemetry/api';
import { registerInstrumentations } from '@opentelemetry/instrumentation';

import { OpenTelemetrySDK, ServiceNames } from '@mono/services';
import { GrpcInstrumentation } from '@opentelemetry/instrumentation-grpc';

const startOtelSDK = (serviceName: ServiceNames) => {
  new OpenTelemetrySDK(serviceName).start();
  registerInstrumentations({
    instrumentations: [new GrpcInstrumentation()],
  });
};

let instance: Tracer;
class OtelTracer {
  constructor() {
    if (!instance) {
      instance = openTelemetryAPI.trace.getTracer(ServiceNames.USERS_SERVICE);
    }
  }

  getTracer() {
    return instance;
  }
}

export { startOtelSDK, OtelTracer };
