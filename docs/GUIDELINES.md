# Development Guidelines

## Workflow

### Committing

We are using an adaptation of conventional commit standards.

Git hooks are enable to ensure consistency accros all contributions. We are using Husky as Git hooks manager.

#### Hook : pre-commit

Run before a commit is registered.

Check formatting and linting on affected files.

To know more about this hook: `/.husky/pre-commit`

#### Hook : commit-msg

Run before a commit is registered.

Check the commit message itself.

To know more about this hook: `/.husky/commit-message`

## Rules

### Imports

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

// NOT GOOD
import { item } from '@mono/commons/item';
```

### Others

- Use repository pattern when accessing data
- Put DTO and DAO in the models library
  _Because we want to avoid 2 apps having coupled dependencies between each other, it will slow down the build time. You can check the dependencies graph with `nx graph`._
