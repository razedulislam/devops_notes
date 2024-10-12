Why need docker user creation ?
1. Security
By default, the Docker daemon runs as the root user because it requires elevated privileges to manage system resources like networking, filesystems, and containers. Allowing regular users to run Docker commands as root can be risky, as it could lead to privilege escalation or security vulnerabilities.

Solution: Docker creates a specific user group (called docker), allowing users to run Docker commands without needing root access. Any user added to the docker group can run Docker commands without using sudo and without being the root user.


2. Least Privilege Principle
3.  Easier Command Execution no need to use sudo command for non root user


steps:
1. build the image from Dockerfile
`docker build -t my-python-app .`

2. Create a container from the image
`docker run -d -p 5000:5000 --name my-python-ap my-python-app`

3. access docker container
`localhost:5000`