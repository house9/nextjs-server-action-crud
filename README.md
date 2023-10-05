# Application

## in development

```bash
# install dependencies
pnpm install
# start up development postgres instance in docker
docker compose up -d
# run app in dev
pnpm run dev
```

## app directory structure

## installing preline

- https://preline.co/docs/frameworks-nextjs.html

```ts
// in app/layout
useEffect(() => {
  require("preline");

  return () => {};
}, []);
```

## Prisma commands

```bash
# change schema file and apply to dev database without creating migration files
pnpm prisma db push

# create a new migration file with all new dev changes
pnpm prisma migrate dev --name new_migration_filename

# run seeds
pnpm prisma db seed

# run migration files in production
pnpm prisma migrate deploy
```
