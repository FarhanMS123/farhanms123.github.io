#!/bin/bash

# Terminal Command Line: cmd.exe /c "wsl.exe -d Ubuntu --cd %CD%"

sudo apt install unzip

# https://ohmyposh.dev/docs/installation/linux
curl -s https://ohmyposh.dev/install.sh | sudo bash -s

# https://ohmyposh.dev/docs/installation/fonts

# https://ohmyposh.dev/docs/themes#montys
# https://github.com/JanDeDobbeleer/oh-my-posh/blob/main/themes/montys.omp.json
curl -o ~/montys.omp.json https://github.com/FarhanMS123/farhanms123.github.io/raw/collections/shell/montys.omp.json

# https://ohmyposh.dev/docs/installation/prompt
# echo "eval \"\$(oh-my-posh init bash)\"" >> ~/.bashrc
# echo "eval \"\$(oh-my-posh init bash --config ~/montys.omp.json)\"" >> ~/.bashrc
echo "eval \"\$(oh-my-posh init bash --config 'https://github.com/FarhanMS123/farhanms123.github.io/raw/refs/heads/master_v3/shell/montys.omp.json')\"" >> ~/.bashrc
exec bash
. ~/.profile