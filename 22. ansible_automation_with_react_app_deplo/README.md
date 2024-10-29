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
## 4. Build and deploy the project again
```
ansible-playbook ansible-react-app
```

## 5. Check docker volume (bind mount)
```
docker inspect y-react-app-container
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