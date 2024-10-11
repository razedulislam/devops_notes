Docker volume:
We know docker container memory is a volatile memory. So we use docker volume concept.

Volume: 
docker manage this volume in their own system and help us to persistence data.

Bind mount: 
If we want to bind container with host machine.


1. Data Persistence: Volumes allow you to persist data even when a container is stopped or removed. Without volumes, data written to the container’s file system will be lost when the container is removed. This is essential for databases or other stateful applications where the data needs to be stored outside the container’s lifecycle.
Example: You can create a volume for a MySQL container so the database data persists even after the container is removed or stopped.


2. Sharing Data Between Containers: Volumes can be mounted into multiple containers, allowing them to share data. This is useful when you have containers that need access to the same data (e.g., multiple web servers sharing the same file storage).
Example: Sharing a volume between two containers.



1.1. Build the Docker Image:
`docker build -t my-nginx-volume .`

1.2. check image
`docker images`

2.1. create docker volume
`docker volume create my-nginx-data`

2.2. Check docker volume
`docker volume ls`

3. Run the Docker Container from image:
Once the image is built, use this command to run the container, mapping port 8080 on your machine to port 80 inside the container:
`docker run --rm -d -p 8080:80 --name <containername> -v <volume_name>:/usr/share/nginx/html <image_name>`
`docker run --rm -d -p 8080:80 --name my-nginx-container -v my-nginx-data:/usr/share/nginx/html my-nginx-volume`

4. Inspect the volume
`docker volume inspect my-nginx-data`

5. check docker container and enter into the container and check data
`docker ps`
`docker exec -it <container_id> bash`

6. check from brower to get expected data
`http://localhost:8080/`

7. stop container and remove container
`docker stop my-nginx-container`
`docker rm my-nginx-container`

8. Create container again from volume
`docker run --rm -d -p 8080:80 --name <containername> -v <volume_name>:/usr/share/nginx/html <image_name>`
`docker run --rm -d -p 8080:80 --name my-nginx-container2 -v my-nginx-data:/usr/share/nginx/html my-nginx-volume`

9. Check again from browser
`http://localhost:8080/`