# zshrc-all

## Order of Setup

1. .profile
2. .zprofile
2. skel-kali.zshrc
3. .zshrc (to put skel-kali.zshrc)
4. .zshrc -> to put few config outside zsh4humans, oh-my-posh
5. install zsh4humans (and oh-my-zsh as addition)
6. drop termux, powerlevel10k, ssh, and many things
7. install oh-my-posh, add zsh config

## Precautions!

- zsh4humans would generate and override `.zshenv` and `.zshrc`
- zsh4humans would backup existing to `zsh-backup/`. You may wish to git init after.
- use hardlink and relink everytime it changed

## iTerm2 settings
- do not save state of alternate screen (LESS issue)
- mouse wheel for LESS
- window scroll (toggle), hightlight stdin area,
- no hope. LESS still saved. Seems something intervere between z4h and tmux

---

# zshrc-all

| .                            | Docker         | WSL            | Installable    |
|------------------------------|----------------|----------------|----------------|
| Ubuntu 24.04 LTS             | (x) 23/08/2025 | (x) 17/08/2025 |                |
| Kali (Rolling) 2025.2        | (v) 23/08/2025 | (v) 17/08/2025 |                |
| Kali Purple                  |                | (-) 17/08/2025 |                |
| MacOS                        | (-) 17/08/2025 | (-) 17/08/2025 | (x) 17/08/2025 |
| Debian 13                    | (x) 23/08/2025 | (x) 17/08/2025 |                |
| ElementaryOS                 |                | (-) 17/08/2025 |                |
| Raspbian                     |                | (-) 17/08/2025 |                |
| SUSE Linux Enterprise 15 SP7 | (x) 23/08/2025 | (x) 18/08/2025 |                |
| openSUSE Tumbleweed          | (x) 23/08/2025 | (x) 18/08/2025 |                |
| RHEL                         | (x) 23/08/2025 |                |                |
| CentOS                       | (x) 23/08/2025 |                |                |
| Fedora Linux 42              | (x) 23/08/2025 | (x) 17/08/2025 |                |

## Resources
- oh-my-zsh, oh-my-posh, 
- [Starship RS](https://starship.rs/), 

## Log 17/08/2025

- On MacOS there is no default .zshrc configuration
- and no Docker or WSL version of MacOS
- Starting or new zsh

```sh
autoload -Uz zsh-newuser-install
  zsh-newuser-install -f
```

- I should use naming: {distro}-{uname}.zshrc
- kali linux suplementary: https://www.kali.org/docs/troubleshooting/common-minimum-setup/
- kali-rolling-2025.2-user; there are ...

```sh
.bash_logout  .bashrc  .bashrc.original  .config  .java  .lesshst  .local  .profile  .sudo_as_admin_successful  .zprofile  .zshrc
```

### Log 18/08/2025

- I tried AlmaLinux-Kitten-10 (WSL) and nothing interesting
- and I tried archlinux (WSL) and nothing interesting
- and I tried OracleLinux_9_5 and not interedted. There is csh and tcsh instead
- seems already everything I need.

### Log 23/08/2025

- Ubuntu docker; try to find all version from 18-25
- Debian docker; try to find all version from 11-15 (forked, duke)
- RHEL try to find on UBI 10 and UBI 10 Init
- SLES try to find bsi-base 15.7, OpenJDK Dev, and OpenJDK Runtime

### Log 06/09/2025
- splitted