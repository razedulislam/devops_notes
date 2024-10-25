FROM python:3

# Copy requirements.txt and install dependencies
COPY ./requirements.txt /requirements.txt
WORKDIR /
RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY . /

# Define the entry point and default command to run the application
ENTRYPOINT [ "python3" ]
CMD [ "app1.py" ]
