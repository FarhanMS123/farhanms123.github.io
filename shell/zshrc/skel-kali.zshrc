# ~/.zshrc file for zsh interactive shells.
# see /usr/share/doc/zsh/examples/zshrc for examples
# setopt nonomatch           # hide error message if there is no match for the pattern
# WORDCHARS='_-' # Don't consider certain characters part of the word

# hide EOL sign ('%')
PROMPT_EOL_MARK=""

# USR_SHARE_PLUGINS=/usr/share
# USR_SHARE_PLUGINS=~/.oh-my-zsh/plugins
USR_SHARE_PLUGINS=${Z4H}/.oh-my-zsh/plugins

# force_color_prompt=yes

configure_prompt() {
}

configure_prompt_uncall() {
}

NEWLINE_BEFORE_PROMPT=yes

    # PROMPT='${debian_chroot:+($debian_chroot)}%n@%m:%~%(#.#.$) '

# zle -N toggle_oneline_prompt
# bindkey ^P toggle_oneline_prompt

# case "$TERM_uncall" in

    # ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE='fg=#999'

    # on docker 23/08/2025
    ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE='fg=244'
