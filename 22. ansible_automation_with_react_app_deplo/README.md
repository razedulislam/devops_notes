## Firstly I tried without ansible, in that time I build the image and run the container manually, which is not convenient
## thats why I am using ansible playbook
## Steps to start this react project
```
ansible-playbook ansible-react-app
```


## using dockerfile
## If you want to use Dockerfile to build image and run the container (optional)

## Build the image
```
docker build -t ansible-react-app .
```

## create a volume
```
sudo docker volume create my-react-app-volume
```

## check volume
```
sudo docker volume ls
```

### Inspect docker volume
```
sudo docker volume inspect my-react-app-volume
```

## Run a container with docker volume
```
docker run --rm -d -p 3000:3000 --name <containername> -v <volume_name>:/usr/share/nginx/html <image_name>
docker run --rm -d -p 3004:3000 --name ansible-react-app-container -v my-react-app-volume:/app/build ansible-react-app
```

## check from brower to get expected data
```
http://localhost:3000/
```

## stop container and remove container
```
docker stop ansible-react-app-container
docker rm ansible-react-app-container
```

## Create container again from volume
```
docker run --rm -d -p 3000:3000 --name <container_name> -v <volume_name>:/usr/share/nginx/html <image_name>
docker run --rm -d -p 3002:3000 --name ansible-react-app-container -v my-react-app-volume:/app/build ansible-react-app
```

## copy one volume data to another volume
```
sudo docker run --rm -v my-nginx-data:/app/build -v my-react-app-volume:/app alpine ash -c "cp -r /app/build/. /app/"
```
## Create container again with new volume
```
docker run --rm -d -p 3002:3000 --name ansible-react-app-container -v my-react-app-volume:/app/build ansible-react-app
```

## Check docker volume mount currectly with new volumes
```
sudo docker inspect <container_id>
```