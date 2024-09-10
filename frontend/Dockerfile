# Use the official Node.js image from Docker Hub
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy environment file and the rest of the application
COPY .env.local .env.local
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose the port on which Next.js will run
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "run", "dev"]
