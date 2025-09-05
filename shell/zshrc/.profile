# install TMux, direnv, ps, pstree, htop
# Example configuration has been installed to: /opt/homebrew/opt/tmux/share/tmux
# zsh4humans has built-in tmux


# common binaries / os level package manager >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# export Path, setup installation: MacPort, HomeBrew
# .zprofile
# MacPorts Installer addition on 2025-07-07_at_13:59:56: adding an appropriate PATH variable for use with MacPorts.
export PATH="/opt/local/bin:/opt/local/sbin:$PATH"
# Finished adapting your PATH environment variable for use with MacPorts.

export PATH="/opt/homebrew/opt/curl/bin:$PATH"

# Golang, Conda, Python, Docker >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# Install Taskfile

export GOPATH=$HOME/go
export GOROOT=/usr/local/go
export GOBIN=$GOPATH/bin

export PATH=$PATH:$GOPATH
export PATH=$PATH:$GOROOT/bin
export PATH=$PATH:$GOPATH/bin
export PATH=${HOME}/miniforge3/bin:$PATH
export CLOUDSDK_PYTHON="${HOME}/miniforge3/bin/python"

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('${HOME}/miniforge3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "${HOME}/miniforge3/etc/profile.d/conda.sh" ]; then
        . "${HOME}/miniforge3/etc/profile.d/conda.sh"
    else
        export PATH="${HOME}/miniforge3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<


# >>> mamba initialize >>>
# !! Contents within this block are managed by 'mamba shell init' !!
export MAMBA_EXE='${HOME}/miniforge3/bin/mamba';
export MAMBA_ROOT_PREFIX='${HOME}/miniforge3';
__mamba_setup="$("$MAMBA_EXE" shell hook --shell zsh --root-prefix "$MAMBA_ROOT_PREFIX" 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__mamba_setup"
else
    alias mamba="$MAMBA_EXE"  # Fallback on help from mamba activate
fi
unset __mamba_setup
# <<< mamba initialize <<<

# The next line updates PATH for the Google Cloud SDK.
if [ -f '${HOME}/.cache/google-cloud-sdk/path.zsh.inc' ]; then . '${HOME}/.cache/google-cloud-sdk/path.zsh.inc'; fi

# The next line enables shell command completion for gcloud.
if [ -f '${HOME}/.cache/google-cloud-sdk/completion.zsh.inc' ]; then . '${HOME}/.cache/google-cloud-sdk/completion.zsh.inc'; fi

# Added by LM Studio CLI (lms)
# export PATH="$PATH:${HOME}/.lmstudio/bin"
# End of LM Studio CLI section

# export LDFLAGS="-L/opt/homebrew/opt/curl/lib"
# export CPPFLAGS="-I/opt/homebrew/opt/curl/include"

export LESS='$LESS --mouse -+X'
# export LESS='$LESS mouse-wheel --mouse -X'