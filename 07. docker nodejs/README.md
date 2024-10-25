## Build the docker image by running
`docker build -t nodejs_image .`

## Start a container by running
`docker run -p 8080:8080 nodejs_image`

## Now check by requesting localhost:8080
`curl localhost:8080`

# Dockerfile basics

## FROM
Using `FROM` we define our base image.

## WORKDIR

## COPY

## RUN

## EXPOSE

## START


### Steps when rebuild the app

# Rebuild the docker file after chaing code
`docker build -t nodejs_image .`

# stop exiting container and remove old container
docker ps
docker stop <container_id>
docker rm <container_id>

# Start new container
docker run -p 8080:8080 nodejs_image

#check the update again

# running port service chcek 
`netstat -ano | findstr :8080`