FROM oven/bun:latest AS builder

ARG SUPABASE_URL
ARG SUPABASE_KEY

ENV SUPABASE_URL=$SUPABASE_URL
ENV SUPABASE_KEY=$SUPABASE_KEY

# Set working directory
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install

# Copy source code and build
COPY . .
RUN bun run build

# --- Production Stage ---
FROM oven/bun:latest AS runner

# Set working directory
WORKDIR /app

# Only copy built output and production dependencies
COPY --from=builder /app/.output ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose Nuxt’s default port
EXPOSE 3000

# Set environment for production
ENV HOST=0.0.0.0 \
		PORT=3000

# Start the Nuxt server
CMD ["bun", "server/index.mjs"]
	
