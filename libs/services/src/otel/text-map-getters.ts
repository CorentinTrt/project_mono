import type { Metadata } from '@grpc/grpc-js';

const grpcTextMapGetter = {
  get: (metadata: Metadata, key: string): string | undefined => {
    const values = metadata.get(key);
    return Array.isArray(values) ? values[0]?.toString() : undefined;
  },
  keys: (metadata: Metadata): string[] => {
    return Object.keys(metadata.getMap());
  },
};

export { grpcTextMapGetter };
