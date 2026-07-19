FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile --ignore-scripts

COPY . .
RUN pnpm run build

FROM node:22-alpine AS production
WORKDIR /app
COPY --from=build /app/.output /app

EXPOSE 3000/tcp
ENTRYPOINT [ "node", "/app/server/index.mjs" ]