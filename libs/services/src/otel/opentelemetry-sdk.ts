import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';
import { Resource } from '@opentelemetry/resources';
import {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION,
} from '@opentelemetry/semantic-conventions';
import {
  PeriodicExportingMetricReader,
  ConsoleMetricExporter,
} from '@opentelemetry/sdk-metrics';
import { NodeSDK } from '@opentelemetry/sdk-node';

import { ServiceNames } from '@mono/services';

class OpenTelemetrySDK {
  private sdk: NodeSDK;

  constructor(serviceName: ServiceNames) {
    this.sdk = new NodeSDK({
      resource: new Resource({
        [ATTR_SERVICE_NAME]: serviceName,
        [ATTR_SERVICE_VERSION]: '1.0',
      }),
      traceExporter: new OTLPTraceExporter({
        url: 'http://localhost:4318/v1/traces',
      }),
      //       metricReader: new PeriodicExportingMetricReader({
      //         exporter: new ConsoleMetricExporter(),
      //       }),
    });
  }

  start() {
    this.sdk.start();
  }
}

export { OpenTelemetrySDK };
