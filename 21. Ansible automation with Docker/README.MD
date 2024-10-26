## have to deploy an static website here

# Automate Your Web Server Setup: A Real-World Example Using Ansible in Docker

## What is Ansible?

Ansible is an open-source automation tool used for configuration management, application deployment, and task automation. It allows you to manage and configure systems, deploy software, and orchestrate more complex IT tasks, all from a central location.

## Step 1 : Build Dockerfile first
```
docker build -t docker_ansible .
```
## step 2 : Create and start new docker container
```
docker run -d -p 8080:80 --name i_docker_ansible docker_ansible
```
## step 3 : we can start a stop container
```
docker start <container_id>
```

## step 4 : Connect to your docker container

```
docker exec -it <container_id> /bin/bash
```

## Step 5: Run the playbook
```
/ansible_playbooks
ansible-playbook webserver_setup.yml
```
## step 6 : Verify the setup
```
localhost:80
<container_ip>:80
```

## step 6: verify 80 port is running in container 
```
netstat -na | grep 80
```

## step 6 : curl into container to check content
```
curl localhost:80
OR
apt update && apt install -y wget
wget -qO- http://localhost
```

## step 7 : debug
```
docker inspect <container_id>
docker logs <container_id>
```

## if we want to expose port 

## Install some dependency if needed
```
apt update && apt upgrade -y
apt install net-tools -y
apt install curl -y
apt install vim -y
```

Reference:
https://www.linkedin.com/pulse/automate-your-web-server-setup-real-world-example-using-razedul-islam-119ec/