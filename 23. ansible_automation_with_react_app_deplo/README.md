### ansible secret
### ansible role
### ansible galaxy



## Firstly I tried without ansible, in that time I build the image and run the container manually, which is not convenient. thats why I am using ansible playbook

## Steps to start this react project
## 1. Run the project using ansible playbook

```
ansible-playbook ansible-react-app
```
## 2. check from brower to get expected data
```
http://localhost:3000/
```
## 3. adds Bind mount with your host machine now
```
volumes:
    - "/home/raj/Desktop/devops_notes/22. ansible_automation_with_react_app_deplo/data:/app/data"
```

## 4. Check the mount volume in container
```
docker exec -it my-react-app-container ls /app/data
```

## 5. Build and deploy the project again
```
ansible-playbook ansible-react-app
```

## 6. Check docker volume (bind mount)
```
docker inspect y-react-app-container
```

## 6. Restoring Data with Bind Mounts if needed
```
docker run -d -v /host/path/data:/container/path/data my-container
docker run -d -v /home/raj/Desktop/devops_notes/22. ansible_automation_with_react_app_deplo/data:/app/data
```

# Protect your app sensitive data using .env file
## step 1: 

## step 2: create a file .bashrc to set password in environment and set actual password
```
vi ~/.env
export DOCKER_HUB_PASSWORD='your_password_here'
```
## step 3. change the permision 
```
chmod 600 ~/.env
```
## step 4: Apply the changes
```
source ~/.env
```
## step 5: check the password is working or not
```
echo $DOCKER_HUB_PASSWORD
```
### will get your set password as output

# Dockerhub image not pushed or denied issue when try to push image
## if image push not work using ansible playbook

Step 1: 
`Firstly crete a reository in docker hub`

### build the image manually using dockerfile
```
docker build -t my-react-app .
```
### Login docker hub using cli. put your dockerhub actual password if required
```
sudo docker login -u <dockerhub_username>
```

### tag your image
```
sudo docker tag my-react-app razedulalways/my-react-app:latest
```
### Push your image in docker hub
```
sudo docker push razedulalways/my-react-app:latest
```

# image version controlling
### When you will change the code or configuration of yml, you should give a new image tag so that you can use previous image if there is any issue in your new build imaged

## Example :
```
docker build -t my-react-app .
docker tag my-react-app razedulalways/my-react-app:latestv1
```

##  Optional
## using dockerfile without ansible you have to do manually all task
## If you want to use Dockerfile to build image and run the container

## 1. Build the image
```
docker build -t ansible-react-app .
```

## 2. create a volume
```
sudo docker volume create my-react-app-volume
```

## 3. check volume
```
sudo docker volume ls
```

### 4. Inspect docker volume
```
sudo docker volume inspect my-react-app-volume
```

## 5. Run a container with docker volume
```
docker run --rm -d -p 3000:3000 --name <containername> -v <volume_name>:/usr/share/nginx/html <image_name>
docker run --rm -d -p 3004:3000 --name ansible-react-app-container -v my-react-app-volume:/app/build ansible-react-app
```

## 6. check from brower to get expected data
```
http://localhost:3000/
```

## 7. stop container and remove container
```
docker stop ansible-react-app-container
docker rm ansible-react-app-container
```

## 8. Create container again from volume
```
docker run --rm -d -p 3000:3000 --name <container_name> -v <volume_name>:/usr/share/nginx/html <image_name>
docker run --rm -d -p 3002:3000 --name ansible-react-app-container -v my-react-app-volume:/app/build ansible-react-app
```

## 9. copy one volume data to another volume
```
sudo docker run --rm -v my-nginx-data:/app/build -v my-react-app-volume:/app alpine ash -c "cp -r /app/build/. /app/"
```
## 10. Create container again with new volume
```
docker run --rm -d -p 3002:3000 --name ansible-react-app-container -v my-react-app-volume:/app/build ansible-react-app
```

## 11. Check docker volume mount currectly with new volumes
```
sudo docker inspect <container_id>
```