#!/bin/bash

DEBIAN_FRONTEND=noninteractive
. /etc/os-release

# [How to Run Linux Commands in Background | phoenixNAP KB](https://phoenixnap.com/kb/linux-run-command-background)
# [How to Run Linux Commands in Background | Linuxize](https://linuxize.com/post/how-to-run-linux-commands-in-background/)
# [package management - Cannot install nohup command - Ask Ubuntu](https://askubuntu.com/questions/1247229/cannot-install-nohup-command)
# [How to Install and Use ‘nohup’ Command in Linux](https://ioflood.com/blog/install-nohup-command-linux/)

# coreutils
# jobs, nohup, nice, pgrep, kill, &, fg, bg, disown, dpkg, screen, tmux, vim, cat, ping, sudo, apt, apt-get, ps, grep,

# PRECAUTION before updating/upgrading Ubuntu
sudo cp /etc/resolv.conf /etc/resolv.conf.bu0
nohup sudo apt install -y --install-recommends resolvconf

# INITIATION for using ubuntu
sudo apt update
sudo apt upgrade
sudo apt install -y --install-recommends coreutils net-tools apt-utils software-properties-common # core & utils
sudo apt install -y --install-recommends rsyslog systemd systemd-sysv systemd-cron sudo # system
sudo apt install -y --install-recommends gnupg iproute2 ca-certificates iptables-persistent # core
sudo apt install -y --install-recommends gettext locales manpages-dev # additional
sudo apt install -y --install-recommends nano screen # basic
sudo apt install -y --install-recommends curl wget aria2 zlib1g-dev libssl-dev libnss3-dev # basic
sudo dpkg --configure -a

# install network tools, ping, curl, wget, nano, screen, firewall
# install proftpd, sieve

# SETUP basic development tools
# makefile, git
sudo apt install git git-lfs
git config --global http.sslverify false
git lfs install

# SETUP GNU C Compiler
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt update
sudo apt install -y --install-recommends build-essential libncurses5-dev libgdbm-dev libreadline-dev libffi-dev libmpfr-dev \
        libgmp3-dev libmpc-dev

# SETUP Docker & Kubernetes
# rancher k3s, vanilla, portainer

# SETUP databases
sudo apt install mongodb-org
# install postgresql, mongodb, mariadb, mysql, mssql, redis, memcache, casandra

# SETUP Python
sudo apt install python3 python3-pip

# SETUP Golang

# SETUP NodeJS
sudo apt install nodejs

# SETUP Web Control Panel
sudo apt install -y --install-recommends -t ${VERSION_CODENAME}-backports cockpit
sudo service cockpit start
sudo systemctl enable cockpit.socket