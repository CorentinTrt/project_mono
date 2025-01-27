import { IncomingMessage } from 'http';
import openTelemetryAPI, { Tracer } from '@opentelemetry/api';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';

import { OpenTelemetrySDK, ServiceNames } from '@mono/services';

import type { Span } from '@opentelemetry/api';

const startOtelSDK = (serviceName: ServiceNames) => {
  new OpenTelemetrySDK(serviceName).start();
  registerInstrumentations({
    instrumentations: [
      new HttpInstrumentation({
        requestHook: function (span: Span, request: IncomingMessage) {
          span.updateName(`${request.method} - ${request.url}`);
        },
      }),
    ],
  });
};

let instance: Tracer;
class OtelTracer {
  constructor() {
    if (!instance) {
      instance = openTelemetryAPI.trace.getTracer(ServiceNames.BFF_WEB);
    }
  }

  getTracer() {
    return instance;
  }
}

export { startOtelSDK, OtelTracer };
