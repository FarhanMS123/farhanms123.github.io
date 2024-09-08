FROM ubuntu:jammy

RUN echo 'root:root' | chpasswd
# ENV HOSTNAME=localhost.local
# RUN HOSTNAME=$HOSTNAME.local

RUN apt update -y
RUN apt upgrade -y
RUN apt install -y ca-certificates curl wget iproute2 net-tools --install-recommends

WORKDIR /home/download

# Cockpit
RUN . /etc/os-release
RUN apt install -t ${VERSION_CODENAME}-backports cockpit -y
RUN service cockpit start
RUN systemctl enable cockpit.socket

EXPOSE 9090:9090
CMD ["sh", "-c", "sleep infinity"]
