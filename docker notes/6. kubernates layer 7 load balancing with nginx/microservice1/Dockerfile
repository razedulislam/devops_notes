# syntax=docker/dockerfile:1
FROM python:3.7-alpine
# FROM python:3.7-slim
WORKDIR /code
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 5001
COPY . .
CMD ["flask", "run", "-p", "5001"]