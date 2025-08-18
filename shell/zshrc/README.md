# zshrc-all

| .                            | Docker         | WSL            | Installable    |
|------------------------------|----------------|----------------|----------------|
| Ubuntu 24.04 LTS             |                | (x) 17/08/2025 |                |
| Kali (Rolling) 2025.2        |                | (v) 17/08/2025 |                |
| Kali Purple                  |                | (-) 17/08/2025 |                |
| MacOS                        | (-) 17/08/2025 | (-) 17/08/2025 | (x) 17/08/2025 |
| Debian 13                    |                | (x) 17/08/2025 |                |
| ElementaryOS                 |                | (-) 17/08/2025 |                |
| Raspbian                     |                | (-) 17/08/2025 |                |
| SUSE Linux Enterprise 15 SP7 |                | (x) 18/08/2025 |                |
| openSUSE Tumbleweed          |                | (x) 18/08/2025 |                |
| RHEL                         |                |                |                |
| CentOS                       |                |                |                |
| Fedora Linux 42              |                | (x) 17/08/2025 |                |

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