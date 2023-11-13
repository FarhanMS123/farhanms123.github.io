FROM ubuntu:jammy

RUN echo 'root:root' | chpasswd

# [(4) Systemd Not able to boot Ubuntu 22.04 Host and Container : docker](https://www.reddit.com/r/docker/comments/128a8zc/systemd_not_able_to_boot_ubuntu_2204_host_and/)
# [docker-ubuntu2204-ansible/Dockerfile at master · geerlingguy/docker-ubuntu2204-ansible](https://github.com/geerlingguy/docker-ubuntu2204-ansible/blob/master/Dockerfile)
# [docker-ubuntu-systemd/Dockerfile at main · eniocarboni/docker-ubuntu-systemd](https://github.com/eniocarboni/docker-ubuntu-systemd/blob/main/Dockerfile)
# [docker-ubuntu-systemd/Dockerfile at master · robertdebock/docker-ubuntu-systemd](https://github.com/robertdebock/docker-ubuntu-systemd/blob/master/Dockerfile)

RUN apt update -y
RUN apt upgrade -y
RUN apt install -y ca-certificates curl wget iproute2 net-tools --install-recommends
RUN apt install -y apt-utils build-essential locales software-properties-common --install-recommends
RUN apt install -y rsyslog systemd systemd-sysv systemd-cron sudo --install-recommends
RUN apt update -y
RUN apt upgrade -y
RUN dpkg --configure -a

CMD ["/lib/systemd/systemd"]
