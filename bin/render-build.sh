#!/bin/sh

# exit on error
set -o errexit

echo "forcing new pnpm"
npm install -g pnpm

echo "node: $(node --version)"
echo "pnpm: $(pnpm --version)"

echo "installing dependencies"
pnpm install

echo "building"
pnpm build

echo "run database migrations"
pnpm prisma migrate deploy
