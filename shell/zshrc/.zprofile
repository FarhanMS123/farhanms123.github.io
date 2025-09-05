# ~/.zprofile: user-specific .zprofile file for zsh(1).
#
# This file is sourced only for login shells (i.e. shells
# invoked with "-" as the first character of argv[0], and
# shells invoked with the -l flag.)
#
# Global Order: zshenv, zprofile, zshrc, zlogin

if [ -f "$HOME/.profile" ]; then
    emulate sh -c '. "$HOME/.profile"'
fi

# Self-define Functions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# .zshenv would be written by zsh4humans
# .zshrc is used for styling

# zstyle -L
zstyle-list-patterns () {
    local tmp
    zstyle -g tmp
    print -rl -- "${(@o)tmp}"
}