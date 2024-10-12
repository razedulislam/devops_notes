Why need docker user creation ?
---> Minimizing Security Risks in Application Containers
Example: Suppose you're running a web application inside a Docker container (like Flask or Nginx). If the container is running as root and the application has a security vulnerability, an attacker who exploits the app could gain root access to the container.

Risk: With root access, the attacker could potentially break out of the container and harm the host system, affecting other containers or services.

Non-root Benefit: By running the app as a non-root user, even if an attacker exploits the app, they only get the limited permissions of that non-root user (e.g., raz). This means they can’t easily escape the container or access sensitive parts of the host system.


Solution: Creating a non-root custom user limits the potential impact of security breaches. If an attacker compromises the container, they only get access to a limited, unprivileged user account.

Use Case: Applications that handle sensitive data, such as APIs or web services, should be run under a non-root user to follow the principle of least privilege.



steps:
1. build the image from Dockerfile
`docker build -t my-python-app .`

2. Create a container from the image
`docker run -d -p 5000:5000 --name my-python-ap my-python-app`

3. access docker container
`localhost:5000`

4. enter into the docker container as non root user(raz)
`docker exec -it <container-id> bash`

note: If you want to create a directory or want to delete a file you can not delete except you have given permission
in this small project raz has full control on /app directory only

Question:
Can the root user modify or delete any file from /app directory which owner raz?
Yes, root user has all access, he can do anything in the server. 