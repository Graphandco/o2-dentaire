# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# NEXT_PUBLIC_* inlinées au build Next.js
ARG NEXT_PUBLIC_WP_GRAPHQL
ARG NEXT_PUBLIC_WP_REST
ENV NEXT_PUBLIC_WP_GRAPHQL=$NEXT_PUBLIC_WP_GRAPHQL
ENV NEXT_PUBLIC_WP_REST=$NEXT_PUBLIC_WP_REST

# Copier uniquement les fichiers de dépendances d'abord (cache Docker)
COPY package*.json ./
RUN npm ci

# Copier le reste du code source
COPY . .

# Build Next.js (génère .next/standalone)
RUN npm run build

# Runtime stage — image minimale via output standalone
FROM node:20-alpine AS runner

RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3003
ENV HOSTNAME=0.0.0.0

# Assets publics + sortie standalone (deps tracées uniquement)
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3003

CMD ["node", "server.js"]
