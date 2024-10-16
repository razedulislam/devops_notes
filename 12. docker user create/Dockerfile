# Use an official Python runtime as a parent image
FROM python:3.9-slim
#create a custom user and group 
RUN groupadd -r my-user-group && useradd -r -g my-user-group raz

# Set the working directory in the container
WORKDIR /app

# Copy all the files from the current directory to the container
COPY . .

#change the ownership of the user 
RUN chown raz:my-user-group /app

# Install Python dependencies directly using pip
RUN pip install --no-cache-dir Flask requests gunicorn

#switch to the new user
USER raz

# Expose the port the app runs on. this port will not available outside of container. 
# this port is for understanding purpose when a developer or devops engineer will work using this dockerfile they will bbe able
# to understand easily about the container port

EXPOSE 5000

# Define environment variable
ENV PYTHONUNBUFFERED=1

# Command to run the app
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]
