# Project structure

```
nx-monorepo/
├── apps/
│   ├── front-ends/          # Frontend applications
│   │   ├── app1/            # Example: Angular, React, Vue
│   │   └── app2/
│   ├── back-ends/           # Backend micro-services
│   │   ├── service1/        # Example: NestJS, Express
│   │   └── service2/
│   └── back-for-fronts/     # Backend-for-frontend services
│       ├── bff1/
│       └── bff2/
├── libs/                    # Shared libraries
│   ├── config/              # Centralized configurations (shared envs, constants)
│   ├── commons/             # Reusable utilities
│   ├── models/              # Shared DTOs, interfaces, types
│   ├── proto-descriptors/   # .proto files and generated types
│   └── services/            # Shared logic between apps
├── tools/                   # Custom scripts or utilities for Nx
│   └── scripts/             # Scripts for automation
├── node_modules/
├── nx.json                  # Nx workspace configuration
├── package.json             # Dependencies and scripts
├── tsconfig.base.json       # Centralized TypeScript configuration
├── workspace.json           # Nx project definitions (if using non-default setup)
└── .eslintrc.json           # Centralized ESLint configuration
```
