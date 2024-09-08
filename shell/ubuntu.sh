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

cd ~ && mkdir Downloads && cd ~/Downloads
sudo apt install -y --install-recommends curl apt-transport-https git # convenience
sudo install -m 0755 -d /etc/apt/keyrings
# curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
# sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
# ... add others gpt sources here ...

sudo apt update
sudo apt upgrade

sudo apt install -y --install-recommends coreutils net-tools apt-utils software-properties-common # core & utils
sudo apt install -y --install-recommends rsyslog systemd systemd-sysv systemd-cron sudo # system
sudo apt install -y --install-recommends gnupg iproute2 ca-certificates iptables-persistent # core
sudo apt install -y --install-recommends gettext locales manpages-dev apt-transport-https network-manager-openconnect-gnome # additional
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

# https://docs.docker.com/engine/install/ubuntu/
# https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04
# https://phoenixnap.com/kb/install-docker-on-ubuntu-20-04
# https://docs.docker.com/desktop/install/ubuntu/

## 1.1. Docker: Using Default Repositories
sudo apt install docker.io -y
sudo snap install docker

## 1.2. Docker: Using Docker Streamline (by digitalocean)
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
# sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

## 1.3. Docker: Using Docker Streamline with dockerx (by Docker)
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

## ... 2. continue using docker streamline ...
sudo apt-get update
apt-cache policy docker-ce
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

## ... 3. continue setup first use of Docker ...
sudo systemctl status docker
sudo usermod -aG docker ${USER}
su - ${USER}
groups | grep docker
docker version

# SETUP databases
sudo apt install mongodb-org
# install postgresql, mongodb, mariadb, mysql, mssql, redis, memcache, casandra

# SETUP Python
# venv, conda, miniconda, jupyter notebook
# https://virtualenv.pypa.io/en/latest/installation.html
# https://pypi.org/project/virtualenv/
# https://serverspace.io/support/help/python-3-virtual-environment-on-ubuntu-22-04/
# https://medium.com/@AgnesMbiti/creating-a-python-virtual-environment-on-ubuntu-22-04-5efc173ce655

sudo apt -y --install-recommends install python3 python3-pip python3-venv
pip3 install --upgrade setuptools
# pip3 install virtualenv
ln /bin/python3 /bin/python

# SETUP Golang

# SETUP NodeJS
sudo apt install nodejs

# SETUP Web Control Panel
sudo apt install -y --install-recommends -t ${VERSION_CODENAME}-backports cockpit
sudo service cockpit start
sudo systemctl enable cockpit.socket

# Chrome, Firefox, Brave, Wine, Waydroid, Cloudflare Warp, VS Code, Nix OS
# https://askubuntu.com/questions/1487117/how-to-change-the-system-fixed-width-font-using-terminal
# https://elementaryos.stackexchange.com/questions/1149/how-can-i-change-the-default-terminal-font
