# Use official Node.js image (Alpine for small size)
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /usr/testing/backend-app

# Copy package files first to leverage Docker cache for npm install
COPY package*.json ./

# Install dependencies (use 'npm ci' for reliable production builds)
RUN npm install --omit=dev

# Copy the rest of the application code
COPY . .

# Expose the application port (matching your app's listening port)
EXPOSE 3000

# Define the command to start your application
CMD ["node", "index.js"]
