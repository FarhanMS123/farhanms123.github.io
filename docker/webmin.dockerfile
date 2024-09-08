FROM ubuntu:jammy

RUN echo 'root:root' | chpasswd
# ENV HOSTNAME=localhost.local
# RUN HOSTNAME=$HOSTNAME.local

RUN apt update -y
RUN apt upgrade -y
RUN apt install -y ca-certificates curl wget iproute2 net-tools --install-recommends

WORKDIR /home/download

# WEBMIN
RUN curl -o setup-repos.sh https://raw.githubusercontent.com/webmin/webmin/master/setup-repos.sh
RUN echo "Y" | sh setup-repos.sh
RUN apt-get install webmin --install-recommends -y

EXPOSE 10000:10000
CMD ["sh", "-c", "/etc/webmin/start && sleep infinity"]
