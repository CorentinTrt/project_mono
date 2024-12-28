import { SpanKind } from '@opentelemetry/api';
import path from 'path';

import { users } from './db';

import { Repository } from '@mono/models';
import { OtelTracer } from './user.otel';

import type { GetUserRequest, User } from '@mono/proto-descriptors';

const tracer = new OtelTracer().getTracer();

class UserRepository implements Repository<User> {
  // _TO_DO: implement data omitter system to prevent sensible data to be transmitted
  static read = ({ userId }: GetUserRequest): User | undefined => {
    return tracer.startActiveSpan(
      'UserRepository.read',
      {
        kind: SpanKind.INTERNAL,
      },
      (span) => {
        span.setAttribute('source.file.name', path.basename(__filename, '.ts'));

        const usersFound = users.find((item: User) => userId == item.userId);

        span.end();
        return usersFound;
      }
    );
  };
}

export { UserRepository };
