# Build phase

# tagging as builder -> basically calling this phase "builder"
FROM node:alpine as builder
WORKDIR "/app"
COPY package.json .
RUN yarn install
COPY . .
RUN yarn run build

# Run phase

# Second FROM indicates second phase
FROM nginx

# copies over from another phase
COPY --from=builder /app/build /usr/share/nginx/html