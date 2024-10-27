# Use an official Node.js image as the base
FROM node:16-alpine

# Install necessary dependencies, including Python and Ansible
RUN apk update && \
    apk add --no-cache python3 py3-pip openssl bash && \
    pip3 install --upgrade pip && \
    pip3 install ansible

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files into the container
COPY ema-john-simple-with-auth/package.json ema-john-simple-with-auth/package-lock.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY ema-john-simple-with-auth/. .
COPY react_app.yml .
# Build the React app for production
RUN npm run build

# Install an HTTP server to serve the static files
RUN npm install -g serve

# Expose port 3000 for the HTTP server
EXPOSE 3000

# Start the app by executing the ansible-playbook and serving the app
ENTRYPOINT ["sh", "-c", "ansible-playbook /app/react_app.yml && serve -s build -l 3000"]
