# Single-stage Dockerfile
#FROM python:3.9-slim
#WORKDIR /app
#COPY requirements.txt .
#RUN pip install --no-cache-dir -r requirements.txt
#COPY app.py .
#EXPOSE 5000
#CMD ["python", "app.py"]


# Stage 1: Build stage (using a larger image with build dependencies)
FROM python:3.9-slim AS build

# Set working directory
WORKDIR /app

# Copy requirements file to install dependencies
COPY requirements.txt .

# Install dependencies in a separate directory
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

# Stage 2: Final image (a smaller image)
FROM python:3.9-alpine

# Set working directory
WORKDIR /app

# Copy the dependencies from the first stage to the final image
COPY --from=build /install /usr/local

# Copy only necessary application files
COPY app.py .

# Expose the port where the Flask app will run
EXPOSE 5000

# Command to run the app
CMD ["python", "app.py"]
