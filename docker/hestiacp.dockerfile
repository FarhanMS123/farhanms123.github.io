FROM ubuntu:jammy

RUN echo 'root:root' | chpasswd
# ENV HOSTNAME=localhost.local
# RUN HOSTNAME=$HOSTNAME.local

RUN apt update -y
RUN apt upgrade -y
RUN apt install -y ca-certificates curl wget iproute2 net-tools --install-recommends

WORKDIR /home/download

# HestiaCP
RUN wget https://raw.githubusercontent.com/hestiacp/hestiacp/release/install/hst-install.sh
RUN rm -rf /usr/local/hestia
RUN bash hst-install.sh -y no -s localhost.local -e animationfar@gmail.com \
    --multiphp yes --postgresql yes --proftpd yes --sieve yes --quota yes

EXPOSE 8083:8083
CMD ["sh", "-c", "sleep infinity"]
