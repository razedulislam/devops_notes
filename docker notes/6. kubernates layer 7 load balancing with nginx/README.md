# Purpose
Here we will build a layer 7 loadbalancer using nginx and use 3 python servers in a single pod.

We are trying to simulate this architecture

redis = is used as database
flask = is used as web deployment or application deployment 

![layer 7 load balancing inside a single pod](https://raw.githubusercontent.com/razedulalways/devops-notes/master/23.%20kubernates%20layer%207%20load%20balancing%20with%20nginx/images/layer%207%20load%20balancing%20inside%20a%20pod.png)

!! WARNING !! - This way of architecturing this many containers inside a single pod is **bad**. We are doing it like this just for **demonstration**.

Notes: here we have create image from Dockerfile  and pushed that image in the docker hub registray. finally we have
created a yaml file and created pod using kubectl apply -f layer7_load_balancing.yaml file
      
## Build all the images using
```
docker build -t razedulalways/i_23_loadbalancer loadbalancer
docker build -t razedulalways/i_23_microservice1 microservice1
docker build -t razedulalways/i_23_microservice2 microservice2
docker build -t razedulalways/i_23_microservice3 microservice3
```
## Push all the images using
```
docker push razedulalways/i_23_loadbalancer
docker push razedulalways/i_23_microservice1
docker push razedulalways/i_23_microservice2
docker push razedulalways/i_23_microservice3
```

## Run the pod using
`kubectl apply -f layer7 load balancing.yaml`
or,
`kubectl create -f layer7 load balancing.yaml`

## Run this command to verify that all the containers are up
`kubectl get pods`

## Forward the load balancer port to main host machine using
`kubectl port-forward layer-7-load-balancing 3001:80`

# go to any container using this command (in pod there are 5 container, I am going to one conatiner named microservice2)
kubectl exec -it layer-7-load-balancing -c microservice2 -- /bin/sh

## Now curl multiple time to reach the backend
`curl localhost:3001`

Watch the output and see that different microservice is getting the call

## Now use the endpoint to get result out from redis
`curl localhost:3001/get-hit-count`

## check logs from host machine
`kubectl logs -f <pod name>`

## check log specific service(container within a pod)
kubectl logs -f <pod name> -c <service name>

kubectl logs -f layer-7-load-balancing -c redis
kubectl logs -f layer-7-load-balancing -c microservice1
kubectl logs -f layer-7-load-balancing -c microservice2
kubectl logs -f layer-7-load-balancing -c microservice3


## Why we are building image using docker ? 

1. Build
In Kubernetes:

1. Kubernetes itself does not handle the "build" process for container images. Instead, you build Docker images or container images using tools like docker, buildah, or podman, or through CI/CD pipelines.
2. Once the image is built, it is pushed to a container registry (e.g., Docker Hub, Google Container Registry, AWS ECR).