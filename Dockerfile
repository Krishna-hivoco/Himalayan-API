# FROM node:alpine
# RUN npm i -g pnpm
# WORKDIR /app
# COPY . ./
# # Install Puppeteer dependencies
# # RUN apt-get update && apt-get install -yq libgconf-2-4




FROM node:alpine

# Install pnpm globally
RUN npm i -g pnpm

# Install system dependencies for Puppeteer and Chromium
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    nodejs \
    yarn

# Set an environment variable for Puppeteer to use the installed Chromium
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Install Puppeteer
RUN pnpm install puppeteer@13.5.0

# Create a non-root user
RUN addgroup -S pptruser && adduser -S -G pptruser pptruser
USER pptruser

# Set the working directory
WORKDIR /app

# Copy application files
COPY . ./

# Install application dependencies
RUN pnpm install

# Specify the command to run when the container starts
CMD ["pnpm", "start"]

#