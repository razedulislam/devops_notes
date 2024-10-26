# Use Ubuntu 20.04 as the base image
FROM ubuntu:20.04

# Update packages, install necessary dependencies and Ansible
RUN apt update && \
    apt install -y software-properties-common && \
    add-apt-repository --yes --update ppa:ansible/ansible && \
    apt install -y ansible nano apache2

# Set working directory for Ansible playbooks
WORKDIR /ansible_playbooks

# Copy the Ansible playbook into the container
COPY webserver_setup.yml /ansible_playbooks

# Run Ansible playbook and keep Apache running in the foreground
ENTRYPOINT ["sh", "-c", "ansible-playbook webserver_setup.yml && apache2ctl -D FOREGROUND"]
