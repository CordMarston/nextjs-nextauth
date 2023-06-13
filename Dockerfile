
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /nextstack

COPY package.json package-lock.json ./
RUN  npm install --production

FROM node:18-alpine AS builder
WORKDIR /nextstack
COPY --from=deps /nextstack/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /nextstack

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1


COPY --from=builder  /nextstack/.next ./.next
COPY --from=builder /nextstack/node_modules ./node_modules
COPY --from=builder /nextstack/package.json ./package.json

RUN ls -lh

EXPOSE 2024

ENV PORT 2024

CMD ["npm", "run", "dev"]