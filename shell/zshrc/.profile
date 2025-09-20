# install TMux, direnv, ps, pstree, htop, bash (upgrade)
# Example configuration has been installed to: /opt/homebrew/opt/tmux/share/tmux
# zsh4humans has built-in tmux

# from kali user .profile #3a9da06
# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/bin" ] ; then
    PATH="$HOME/bin:$PATH"
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/.local/bin" ] ; then
    PATH="$HOME/.local/bin:$PATH"
fi

# common binaries / os level package manager >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# export Path, setup installation: MacPort, HomeBrew
# .zprofile
# MacPorts Installer addition on 2025-07-07_at_13:59:56: adding an appropriate PATH variable for use with MacPorts.
export PATH="/opt/local/bin:/opt/local/sbin:$PATH"
# Finished adapting your PATH environment variable for use with MacPorts.

eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
# export PATH="/opt/homebrew/opt/curl/bin:$PATH"

# Golang >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# Install Taskfile

export GOPATH=$HOME/go
export GOROOT=/usr/local/go
export GOBIN=$GOPATH/bin

export PATH=$PATH:$GOPATH
export PATH=$PATH:$GOROOT/bin

export PATH=${HOME}/miniforge3/bin:$PATH

# export CLOUDSDK_PYTHON="${HOME}/miniforge3/bin/python"

# export LDFLAGS="-L/opt/homebrew/opt/curl/lib"
# export CPPFLAGS="-I/opt/homebrew/opt/curl/include"

export profile_LESS="$LESS --mouse -+X -+F"
export LESS="$LESS $profile_LESS"
# export LESS="$LESS -iRFXMx4 --mouse -+X"
# export LESS='$LESS mouse-wheel --mouse -X'