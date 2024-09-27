# ZSH

This file documents setup process for _oh-my-zsh_.

Change shell to zsh: `chsh -s $(which zsh)`.

## Oh-My-Zsh

### OMZ Installation

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### Syntax highlight

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh}customzsh-syntax-highlighting
```

```bash
echo "source ${(q-)PWD}/zsh-syntax-highlighting/customzsh-syntax-highlighting.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc
```

```bash
source ${ZSH_CUSTOM:-~/.oh-my-zsh}customzsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

### Autosuggestions

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

Inside `.zshrc`:

```.zshrc
plugins=(
    # other plugins...
    zsh-autosuggestions
)
```
