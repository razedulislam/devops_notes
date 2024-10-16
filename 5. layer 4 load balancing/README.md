## Run 3 servers using 
## this server is docker hub defauult server so no need to build image, this image is already build 
```
docker run -dit --name server1 nginx
docker run -dit --name server2 nginx
docker run -dit --name server3 nginx
```
note : dit = 

## Now to verify that the servers are receiving hit, we follow the logs of those servers
```
docker logs -f server1
docker logs -f server2
docker logs -f server3
```


## Inspect the servers and find out the ips
```
docker inspect server1
docker inspect server2
docker inspect server3
```

## In my case the ips are 
```
172.17.0.2
172.17.0.3
172.17.0.4
```

### Edit the `/loadbalancer/layer4_loadbalancing.conf` file to enter your ips

## Build the loadbalancer in the loadbalancer folder
`docker build -t i_layer4_loadbalancer .`

## Run the docker container
`docker run -dit --name loadbalancer i_layer4_loadbalancer`

## Exec into the container
`docker exec -it loadbalancer sh`

## Install curl
`apt update & apt install curl -y`

## Curl to localhost 3000
`curl localhost:3000`

# List docker network by running
`sudo docker network ls`

# We can inspect a network by 
`sudo docker network inspect bridge`

## Watch that the loadbalancer is balancing load in the logs of the servers

## References
https://github.com/tekn0ir/nginx-stream

https://nginx.org/en/docs/stream/ngx_stream_core_module.html

https://facsiaginsa.com/nginx/configure-nginx-as-layer-4-load-balancer




## Why use -dit together ?

1. Detached Mode (-d): The container runs in the background, freeing up your terminal.
2. Interactive Mode (-i): Keeps the input open. Useful if you want to interact with the container later using docker attach or docker exec.
3. TTY Mode (-t): Allocates a terminal for better readability and interaction when you do attach to it.
