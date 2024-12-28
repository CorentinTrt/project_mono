import type { RpcGrpcStatusCodeValues } from '@opentelemetry/semantic-conventions/*';
import type { HttpErrorCodes } from '@fastify/sensible/lib/httpError';

type RpcGrpcStatusCodeValue =
  RpcGrpcStatusCodeValues[keyof RpcGrpcStatusCodeValues];

const mapGrpcErrorToHttp = (
  code: RpcGrpcStatusCodeValue,
  message: string
): { code: HttpErrorCodes; message: string } => {
  switch (code) {
    case 5:
      return { code: 404, message };
    case 14:
      return { code: 503, message };
    default:
      return { code: 500, message: 'Oups, something went wrong' };
  }
};

export { mapGrpcErrorToHttp };
