#!/bin/bash

# https://nix.dev/tutorials/first-steps/ad-hoc-shell-environments
# https://search.nixos.org/

nix-shell -p cowsay lolcat
nix-shell -p nvim git npm
nix-shell -p git neovim nodejs
nix-shell -p python3

nix-shell -p go graphviz
nix-shell -p vitess

# nix-collect-garbage

# https://github.com/google/pprof
