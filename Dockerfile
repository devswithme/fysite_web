FROM node:18-alpine as base

WORKDIR /app

RUN npm install -g pnpm

FROM base as deps

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

FROM deps as build

COPY . .

RUN pnpm run build

FROM base as final

ENV NODE_ENV=production
ENV ORIGIN=http://localhost:5173

USER node

COPY package.json ./
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/server ./server

EXPOSE 5173

CMD ["pnpm", "serve"]
