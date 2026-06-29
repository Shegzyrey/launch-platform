FROM node:22-alpine AS build

WORKDIR /app

ARG DATABASE_URL="postgresql://test:password@localhost:5432/laravel_test?schema=checkout_db"
ENV DATABASE_URL=${DATABASE_URL}

COPY package.json package-lock.json tsconfig.json prisma.config.js ./
COPY prisma ./prisma
COPY src ./src

RUN npm ci --ignore-scripts
RUN npm run build

FROM node:22-alpine AS runtime

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts && npm cache clean --force

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/server.js"]
