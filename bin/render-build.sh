#!/bin/sh

# exit on error
set -o errexit

echo "===> remove .env file, used in development only"
rm .env

echo "===> forcing new pnpm"
npm install -g pnpm

echo "===> node: $(node --version)"
echo "===> pnpm: $(pnpm --version)"

echo "===> installing dependencies"
pnpm install

echo "===> building nextjs app"
pnpm build -- --build-mode=experimental-compile

echo "===> generating prisma client"
pnpm prisma generate

echo "===> run database migrations"
pnpm prisma migrate deploy
