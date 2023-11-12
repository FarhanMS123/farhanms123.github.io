# Templates

## HTML

When ever I need to show HTML, which rather complex. I can use `es-module-shim` or `babel` on-fly. 
To beautify the UI, I rather use tailwind and Daisy UI. For this thing works, I may need some polyfill
to compile. In that case, here are some technology stack I use (and hope it could be on-fly):

- Polyfill, BabelJS, RequireJS, Browserify,
- ES Module Shims, Typescript, JSX (React), 
- CSS Module, CSS Preprocessor (Postcss/SASS), Blob Import,
- TailwindCSS, Daisy UI, JQuery, RxJS, Underscore, Zod,
- Highlighter, Monaco, Codemirror, Litegraph
- VanJS, Lit Element, VueJS
- ReactJS, Preact, Vue, Angular

### Tailwind

```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@2.6.0/dist/full.css" rel="stylesheet" type="text/css" />
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = {
    //
};
</script>
```

### ES Module Shim

```html
<script async src="https://ga.jspm.io/npm:es-module-shims@1.8.2/dist/es-module-shims.js"></script>

<!-- https://github.com/guybedford/es-module-shims#init-options -->
<script type="esms-options">
{
    "shimMode": false,
    "polyfillEnable": ['css-modules', 'json-modules']
}
</script>
<script>
window.esmsInitOptions = {
    // polyfillEnable: ['css-modules', 'json-modules']
};
</script>

<!-- https://github.com/guybedford/es-module-shims#import-maps -->
<!-- https://generator.jspm.io/ -->
<script type="importmap-shim"></script>
<script type="importmap">
{
  "imports": {
  },
  "scopes": {
  }
}
</script>

<!-- https://github.com/guybedford/es-module-shims#dynamic-import -->
<script type="module" noshim></script>
<script type="module">
    // import ... from ... assert { type: 'json' }
    // importShim
</script>
<script type="modulepreload-shim"></script>
<script type="module-shim"></script>
```

### BabelJS

```html
<!-- Load Babel -->
<!-- v6 <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script> -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<!-- https://babeljs.io/docs/babel-standalone#data-presets -->
<!-- https://babeljs.io/docs/babel-standalone#data-plugins -->
<script type="text/babel" data-type="module"
    data-presets="env,react,typescript" 
    data-plugins="syntax-import-meta,syntax-import-assertions,syntax-import-attributes,syntax-import-reflection,transform-dynamic-import,proposal-import-defer"
>
</script>
<script type="text/jsx" data-type="module"
    data-presets="env,react,typescript" 
    data-plugins="syntax-import-meta,syntax-import-assertions,syntax-import-attributes,syntax-import-reflection,transform-dynamic-import,proposal-import-defer"
>
</script>
```

### CDN

```
Google Fonts, Typekit, Adobe Fonts, Programming Fonts, Nerd Fonts
Google Hosted Library, Cloudflare cdnjs, jsDelivr, RawGit
UNPKG, JSPM, Skypack Dev, jsDelivr ESM Run
Polygon IO, ESM.SH
```

### Local Testing

```bash
npx serve .
pnpm dlx serve .
```

## NodeJS and So on...
- VSCode Dev, Gitpod, Github Codespaces,
- Codesandbox, Stackblitz, Repl.it, 
- Google Colab, Deepnote, Kaggle,
