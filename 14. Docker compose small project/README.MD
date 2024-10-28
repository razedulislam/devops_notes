Step 1: clone this repository in your local machine

step 2: build and run your project
`docker compose up`

step 3: after finishing your build check the app from browser
`http://localhost:5173/`

step 4: add an item in your app and check it from database
`docker ps`
`docker exec -it </container_id> /bin/bash
`mongosh`
`show dbs`
`use <db_name>`
`show collections`
`db.<collection_name>.find().pretty()`

step 5. check network
`docker network ls`

Note: If your project directory is called myapp, the actual Docker network name will be:
`myapp_my-network`

step 6: Inspect docker network and docker container
`docker inspect <container_id>`

Step 8: Check container logs
`sudo docker logs <container_id>`
`sudo docker logs -f <container_id>`

Step 9: Check Docker Compose service logs
`sudo docker compose logs`
`sudo docker compose logs <service_name>`

Step 10: Check the resource usage of containers
`sudo docker stats`

Step 11: Check the resource usage of containers
`sudo docker top <container_id>`

Step 12: Restart a container
`sudo docker restart <container_id>`

Step 13: Remove stopped containers
`sudo docker container prune`

Step 14: Remove unused images
`sudo docker image prune`

Step 15: View Docker Compose configuration
`sudo docker compose config`

Step 16: Check networks for Docker containers
`sudo docker network inspect <network_name>`

Reference:
https://betterstack.com/community/guides/scaling-docker/docker-compose-getting-started/-



RUN npm run build
Purpose: This command compiles the Vue.js app into a production-ready build. The npm run build command is defined in the package.json and typically outputs files into the dist directory.
Effect: The built Vue.js app is now available in /app/dist.