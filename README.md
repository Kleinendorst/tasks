# Tasks

A tasks app build with Sveltekit.

## Creating a project

To recreate this project with the same configuration:

```sh
# recreate this project
pnpm dlx sv@0.17.0 create --template minimal --types ts --add prettier eslint vitest="usages:unit" tailwindcss="plugins:none" drizzle="database:sqlite+sqlite:libsql" better-auth="demo:password" --install pnpm tasks
```

## Developing

Once you've created a project and installed dependencies with  `pnpm install`, start a development server:

```sh
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

# Add-on steps reported after build

## drizzle:

- Check DATABASE_URL in .env and adjust it to your needs
- Run pnpm run db:push to update your database schema

## better-auth:

- Run pnpm run auth:schema to generate the auth schema
- Run pnpm run db:push to update your database
- Check ORIGIN & BETTER_AUTH_SECRET in .env and adjust it to your needs
- Visit /demo/better-auth route to view the demo
