FROM ubuntu:20.04

RUN apt update && \
    apt install -y software-properties-common && \
    add-apt-repository --yes --update ppa:ansible/ansible && \
    apt install -y ansible nano
WORKDIR /ansible_playbooks
COPY webserver_setup.yml /ansible_playbooks
#ENTRYPOINT ["tail", "-f", "/dev/null"]
ENTRYPOINT ["sh", "-c", "ansible-playbook webserver_setup.yml && tail -f /dev/null"]