# --- Builder Stage ---
	FROM node:22-alpine AS builder

	# Set working directory
	WORKDIR /app
	
	# Install dependencies based on package-lock.json for reproducibility
	COPY package.json package-lock.json ./
	RUN npm ci
	
	# Copy source code and build
	COPY . .
	RUN npm run build
	
	# --- Production Stage ---
	FROM node:22-alpine AS runner
	
	# Set working directory
	WORKDIR /app
	
	# Only copy built output and production dependencies
	COPY --from=builder /app/.output ./
	COPY --from=builder /app/node_modules ./node_modules
	COPY --from=builder /app/package.json ./package.json
	
	# Expose Nuxt’s default port
	EXPOSE 3000
	
	# Set environment for production
	ENV NODE_ENV=production \
			HOST=0.0.0.0 \
			PORT=3000
	
	# Start the Nuxt server
	CMD ["node", "server/index.mjs"]
	
