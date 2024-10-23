New conatinenr necessary packages:

apt update -y
apt upgrade -y
apt install net-tools -y
apt install tcpdump -y
apt install vim -y
apt install iputils-ping -y

step 1: start the application
`docker compose up`

step 2: access the application and check load balancing working or not
check port from docker-compose file
nginx:
`http://localhost:8080/`

app1:
`http://localhost:5001/`

app2:
`http://localhost:5002/`

step 3: enter into two created container
`docker exec -it <container_id> /bin/bash`
`docker exec -it 08b0ddb6erf3 /bin/bash`
`docker exec -it 08b0ddb6203e /bin/bash`

step 4: check available interface
`ifconfig`

you will get `eth0` interface there

step 5: check traffic from both containercontainer
`tcpdump -i any eth0`

step 6: ping from container to check communication between conatiner
enter first container
``docker exec -it <container_id> /bin/bash`
then ping other container using ip port

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

## Watch that the loadbalancer is balancing load in the logs of the servers

## References
https://github.com/tekn0ir/nginx-stream

https://nginx.org/en/docs/stream/ngx_stream_core_module.html

https://facsiaginsa.com/nginx/configure-nginx-as-layer-4-load-balancer
