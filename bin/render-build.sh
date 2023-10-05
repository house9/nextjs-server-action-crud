#!/bin/sh

# exit on error
set -o errexit

echo "===> forcing new pnpm"
npm install -g pnpm

echo "===> node: $(node --version)"
echo "===> pnpm: $(pnpm --version)"

echo "===> installing dependencies"
pnpm install

echo "===> building"
pnpm build -- --build-mode=experimental-compile

echo "===> run database migrations"
pnpm prisma migrate deploy
