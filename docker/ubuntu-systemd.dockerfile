FROM ubuntu:jammy

ENV DEBIAN_FRONTEND="noninteractive"

RUN echo 'root:root' | chpasswd

# [(4) Systemd Not able to boot Ubuntu 22.04 Host and Container : docker](https://www.reddit.com/r/docker/comments/128a8zc/systemd_not_able_to_boot_ubuntu_2204_host_and/)
# [docker-ubuntu2204-ansible/Dockerfile at master · geerlingguy/docker-ubuntu2204-ansible](https://github.com/geerlingguy/docker-ubuntu2204-ansible/blob/master/Dockerfile)
# [docker-ubuntu-systemd/Dockerfile at main · eniocarboni/docker-ubuntu-systemd](https://github.com/eniocarboni/docker-ubuntu-systemd/blob/main/Dockerfile)
# [docker-ubuntu-systemd/Dockerfile at master · robertdebock/docker-ubuntu-systemd](https://github.com/robertdebock/docker-ubuntu-systemd/blob/master/Dockerfile)
# [linux - Ubuntu dockerfile - mailutils install - Stack Overflow](https://stackoverflow.com/questions/40890011/ubuntu-dockerfile-mailutils-install)
# [Escape sequences with "echo -e" in different shells - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/88307/escape-sequences-with-echo-e-in-different-shells)
# [ubuntu - How do I ask apt-get to skip any interactive post-install configuration steps? - Server Fault](https://serverfault.com/questions/227190/how-do-i-ask-apt-get-to-skip-any-interactive-post-install-configuration-steps)
# [apt - DEBIAN_FRONTEND environment variable - Ask Ubuntu](https://askubuntu.com/questions/972516/debian-frontend-environment-variable)

# Enable apt repositories.
RUN sed -i 's/# deb/deb/g' /etc/apt/sources.list

RUN apt update -y
RUN apt install -y resolvconf nano screen
RUN rm /etc/resolv.conf
RUN ln -s /run/resolvconf/resolv.conf /etc/resolv.conf

RUN apt upgrade -y
RUN apt install -y ca-certificates curl wget iproute2 net-tools --install-recommends
RUN apt install -y apt-utils build-essential locales software-properties-common --install-recommends
RUN apt install -yqq rsyslog systemd systemd-sysv systemd-cron sudo --install-recommends
RUN apt-get install iptables-persistent

RUN apt update -y
RUN apt upgrade -y
RUN dpkg --configure -a

ENV DEBIAN_FRONTEND="dialog"

RUN sed -i 's/^\($ModLoad imklog\)/#\1/' /etc/rsyslog.conf

RUN rm -f /lib/systemd/system/systemd*udev* \
    && rm -f /lib/systemd/system/getty.target

VOLUME ["/sys/fs/cgroup", "/tmp", "/run"]
CMD ["/lib/systemd/systemd", "--user"]
