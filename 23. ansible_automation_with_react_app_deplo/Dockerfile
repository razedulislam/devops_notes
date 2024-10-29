# Use an official Node.js image as the base
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files into the container
#COPY ema-john-simple-with-auth/package.json ema-john-simple-with-auth/package-lock.json ./
COPY ema-john-simple-with-auth/package.json ema-john-simple-with-auth/package-lock.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code into the container
#COPY ema-john-simple-with-auth/. .
COPY ema-john-simple-with-auth ./
# Build the React app for production
RUN npm run build

# Install an HTTP server to serve the static files
RUN npm install -g serve

# Expose port 3000 for the HTTP server
EXPOSE 3000

# Start the app with the HTTP server
CMD ["serve", "-s", "build", "-l", "3000"]
