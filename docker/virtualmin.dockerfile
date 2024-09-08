FROM ubuntu:jammy

RUN echo 'root:root' | chpasswd
# ENV HOSTNAME=localhost.local
# RUN HOSTNAME=$HOSTNAME.local

RUN apt update -y
RUN apt install -y screen nano
RUN apt upgrade -y
RUN apt install -y ca-certificates curl wget iproute2 net-tools --install-recommends
RUN dpkg --configure -a

WORKDIR /home/download

# VIRTUALMIN
RUN wget https://software.virtualmin.com/gpl/scripts/virtualmin-install.sh
RUN sh virtualmin-install.sh -n localhost.local -f -v

EXPOSE 10000:10000
CMD ["sh", "-c", "sleep infinity"]
