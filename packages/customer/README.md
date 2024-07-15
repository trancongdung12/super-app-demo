# Customer Application

This is mini app for Customer service. Customer exposes `MainNavigator`. `MainNavigator` is Customer app itself. Customer app uses auth logic and UI (`SignInScreen`, `AccountScreen`) from Auth remote module, so we suggest to run Auth dev server to prevent issues with Customer applicappation. If Auth dev server will no be run, Customer app will not work as standalone app.

## Setup

Install dependencies for all apps in root directory of this monorepo:

```
pnpm install
```

### Run

Start dev server for all apps in root directory of this monorepo if you need to work as a part of host app. Customer app server will run on 9004 port:

```
pnpm start
```
