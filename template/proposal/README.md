# Pages and Vite

Instead of just serving HTML, it could serve any type of file. Such as *.ts, *.tsx, *.svelte, etc. 
The rule is only when it is a component, create the generated HTML. Otherwise, create the javascript.

For example:

```css
demo
\_ sample.tsx
\_ a-file.ts
```

The code above would be generated as

```css
demo
\_ sample.html
\_ a-file.js
```

The problem is how to differentiate a Web and a Component. Remember! The purpose of this way is only to create 
as minimal as possible, with one usable file. In the example above, `sample.tsx` is transformed directly to `.html` 
which the compiled file is put directly in the body of file.

```html
<!-- sample.tsx -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <script>
// compiled script here
    </script>
  </body>
</html>
```

> notice, there is no `div#root` and `title`.

Finally, here are some resume:
- The purpose is serving component as HTML
- The purpose is transform preprocessor script to vanilla javascript
- The compiled file should be in the same path as the original file (no dist)
- The compiled file should be as minimal as possible
- The .html and .js would stay as it is without compiling.
- The problem occurs to differentiate a component as a library (.tsx -> .js) and a component as page (.tsx -> .html)
