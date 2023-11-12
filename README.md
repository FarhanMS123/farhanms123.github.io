# Collections

I have many sample or test case which did not need a full solid project management. Sometimes, it just need 
some HTML, CSS, JS, and compiled on-fly. Even though, sometime I made a backend or kernel code which need be
compiled on-premise. But still, it just a single file which not need a dedicated repository. It conclude I
want to make them centralized. So, here in the README would explain the technology used. Also, you could
refer further more in [template](template/README.md). Later, this documents can be shown in my website
[farhanms123.github.io](https://farhanms123.github.io).

## Initiation

In this root of repository, there are a universal configuration files which I intended to be reuse in every 
project I have. Which means the config files **are** the sample/template/concept I intend to show too.

## Showcase

You may find this project has been structured. So, here are some rules to make it works:

```css
.github/
.vs/
.vscode/

.dist
\_ img/
\_ css/
\_ js/
template

.would-be-hidden
dir1
\_ README.md
\_ index.html
\_ index.{js,c,cpp,css,json,*}
\_ index.{png,jpg,ico}
\_ index.bg.{png,jpg}
dir2
\_ [some-name]/
\_ .[some-name]
\_ [some-name].md
\_ [some-name].html
\_ [some-name].{js,c,cpp,css,json,*}
\_ [some-name].{png,jpg,ico}
\_ [some-name].bg.{png,jpg}

node_modules/
package.json
```

See structure above. All dot-file or folder would be hidden by default. When being showcase, a folder which has
`README.md` and some index file would considered as folder's files. So, when user click `dir1`, it would automatically
show `README.md` or `index.html` or any corresponding file. When the folder has many files, it would be group by name 
and then follow the same rules. It would show the `.md` first, then `.html` second, then etc. It would also group some 
folder or file which has no extension or is a dot-file. The image file would autolatically become the icon of group/folder, 
and the one end with `.bg.*` would become the background of group or folder. Even thought, we still try to figure it 
out what does this background do.

You may find a `package.json` and `node_modules` eventhough this showcase would be compiled on-fly. These npm intended 
to do some precompiled assets such as tailwind and daisy ui. The compiled assets would be put in `.dist` as it would be 
hidden in showcase website.
