# start of refined-kali.zshrc >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# https://gitlab.com/kalilinux/packages/kali-defaults/-/blob/1c08cff486bee1bc677172fd3137ccdc19d485c3/etc/skel/.zshrc

. ./skel-kali.zshrc

# end of refined-kali.zshrc <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

# zsh4humans oh-my-zsh >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# Documentation: https://github.com/romkatv/zsh4humans/blob/v5/README.md.

# Start tmux if not already in tmux.
# -CC attach
# zstyle ':z4h:' start-tmux command tmux -u new -A -D -t z4h

# Don't start tmux.
zstyle ':z4h:' start-tmux       no

# Enable ('yes') or disable ('no') automatic teleportation of z4h over
# SSH when connecting to these hosts.
# zstyle ':z4h:ssh:example-hostname1'   enable 'yes'
# zstyle ':z4h:ssh:*.example-hostname2' enable 'no'
# The default value if none of the overrides above match the hostname.
zstyle ':z4h:ssh:*'                   enable 'no'

# zsh4humans oh-my-zsh <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

# disable PowerLevel10k >>>>>>>>>>>>>>>>>>>>>>>>
# https://stackoverflow.com/questions/75674243/how-can-i-disable-powerlevel10k-p10k-temporarily-in-a-shell
# POWERLEVEL9K_DISABLE_CONFIGURATION_WIZARD=true
powerlevel10k_plugin_unload
# export PS1='$ '
# export PS1='%m%#'

# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# autoload -Uz zsh-newuser-install
#   zsh-newuser-install -f
# SELF IMPLEMENT: mock match to zsh-newuser-install
# Self define must be last to override skel kali.
# Add features of Alt+Arrow/jump-move, Shift+Arrow/text-select,
#   tab-filename matching autocomplete, ... 

# The following lines were added by compinstall

# zstyle ':completion:*' completer _expand _complete      # _ignored _correct _approximate
zstyle :compinstall filename "${HOME}/.zshrc"

# autoload -Uz compinit
# compinit
# End of lines added by compinstall

# Lines configured by zsh-newuser-install
# HISTFILE=~/.zsh_history
# HISTSIZE=100000
# SAVEHIST=100000
# setopt autocd notify
setopt beep extendedglob nomatch
# bindkey -e
# End of lines configured by zsh-newuser-install
# <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

# oh-my-posh >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# wget -q -O ~/.cache/montys.omp.json https://github.com/FarhanMS123/farhanms123.github.io/raw/refs/heads/master_v3/shell/montys.omp.json

# gcloud sdk here as it import zsh instead common shell >>>>>>>>>>>>>>>>>>>>>>>>>>

# The following lines have been added by Docker Desktop to enable Docker CLI completions.
# End of Docker CLI completions

# iTerm2: seeting [alt+select] experimental-advanced:mouse-scroll
test -e "${HOME}/.iterm2_shell_integration.zsh" && source "${HOME}/.iterm2_shell_integration.zsh"

