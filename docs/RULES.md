# Development rules

## Imports

- Sort imports alphabeticaly
- Sort import like this:

```ts
// from external dependencies (except types)

// from internal dependencies (except types)

// types from external depencencies

// types from internal dependencies
```

- Always import from the root of a package
  _Because it's less impacting if we need to change the directory structure._

```ts
// GOOD
import { item } from '@mono/commons';

// BAD
import { item } from '@mono/commons/item';
```

- Use repository pattern when accessing data
- Put DTO and DAO in the models library
  _Because we want to avoid 2 apps having coupled dependencies between each other, it will slow down the build time. You can check the dependencies graph with `nx graph`._
