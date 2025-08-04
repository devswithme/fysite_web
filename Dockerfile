FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN npm i -g pnpm

COPY . .

RUN pnpm run build

CMD ["pnpm", "preview"]