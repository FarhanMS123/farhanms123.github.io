import { type PluginOption, type UserConfig, defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
// import Inspect from 'vite-plugin-inspect'
import createInspect, { showConfig } from './src/plugin/inspect'

// #region VITE ###################################

import { type InputValue, __prepare_cbro_input, __push_rollup_input, virtualRouter } from './src/vite-virtual-file-router/files-router'
import fg from "fast-glob";
import mm from "micromatch"
import path from "path";
import { abs2rel, defaultExcluded, defaultIncluded, jtx_main, mmDefaultOpts, pattern_html, pattern_index_page_html,
          pattern_js_ts, pattern_jsx_tsx, pattern_out_html, pattern_out_just_html, src2page } from './src/vite-virtual-file-router/templates'
import DynamicPublicDirectory from 'vite-multiple-assets';
import fs from "fs/promises";

import { defaultOrders, restructor, sortPath, StructDir } from "./libs/utils_v1";

// #endregion ###################################

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  const ret = {
    plugins: [
      DynamicPublicDirectory(["public/**", "**"], {
        ignore: [...defaultExcluded.filter(v => v.search("public") == -1), "/public", "*lock*"],
      }) as PluginOption,
      virtualRouter(async ({ config, env }) => {
        const files: InputValue[] = [];
        const cwd = config.root!;

        const cbro_input = __prepare_cbro_input(config);

        const pattern = [
          ...defaultIncluded,
          // "{\x01,demos,docker,libs,shell}/**",
          // "{index,viewer.html}.page.tsx",
          // "tools/**/*.html",
          // "tools/Chat*/app-v1*"
        ];
        const mmOpts: fg.Options = {
          ...mmDefaultOpts,
          ignore: [...(mmDefaultOpts.ignore ?? []), "template/**"],
          cwd,
        };
        const _files = await fg(pattern, mmOpts);

        for ( const script_src of _files ) {
          const __files: InputValue[] = [];
          if (mm.isMatch(script_src, pattern_js_ts, mmOpts))
            __files.push(...await src2page({ cwd, script_src }));
          else if (mm.isMatch(script_src, pattern_jsx_tsx, mmOpts))
            __files.push(...await src2page({ cwd, script_src, main_out: { out: `${abs2rel(cwd, script_src)}.tsx`, raw: jtx_main } }))
          else if (mm.isMatch(script_src, pattern_html, mmOpts))
            __push_rollup_input(cbro_input, path.resolve(script_src))

          const _mmOpts = {...mmOpts, basename: true};
          for (const file of __files)
            if (file.inject != "file") {
              if (mm.isMatch(file.out, pattern_index_page_html, _mmOpts))
                file.out = `${file.out.replaceAll(/\.page\.\w+\.html$/ig, "")}.html`;
              else if (mm.isMatch(file.out, pattern_out_just_html, _mmOpts))
                file.out = `${file.out.replaceAll(/\.html\.page\.\w+\.html$/ig, "")}.html`;
              else if (mm.isMatch(file.out, pattern_out_html, _mmOpts))
                file.out = `${file.out.replaceAll(/\.page\.\w+\.html$/ig, "")}/index.html`;
            }

          files.push(...__files);
        }

        return {
          files,
        };
      }),
      // showConfig,
      tsconfigPaths({
        // loose: true,
        // tsconfigPaths: ["./tsconfig.app.json"],
        // configNames: ["tsconfig.app.json"]
      }),
      splitVendorChunkPlugin(),
      react({
        // devTarget: "esnext"
      }),
      {
        name: "vite-post-selfbuild",
        async closeBundle() {
          let dir_dist = await fg(["{,**/}{.*,*}"], {
            ...mmDefaultOpts,
            ignore: ["tsconfig.*", "*.config.*", "pnpm*", "package*", "chunks/**"],
            cwd: path.resolve("dist"),
          });

          dir_dist = sortPath(dir_dist, defaultOrders);

          const restructured = restructor(dir_dist);

          const rem_List = (_list: StructDir) => {
            _list._list = {};
            for (const dir of _list.list) {
              if (typeof dir == "object") rem_List(dir);
            }
          }

          rem_List(restructured);

          await fs.writeFile(path.resolve("./dist/.dirs.json"), JSON.stringify({
            paths: dir_dist,
            ...restructured,
          }, null, 2)).catch((e) => true); //.catch((e) => console.error(e));
        },

      },
    ],

    appType: "mpa",
    build: {
      outDir: "dist",
      assetsDir: "chunks",
      minify: true,
      rollupOptions: {
        // external: ["util", "path"],
        // input: ["./demos/test-import.html"]
      }
    },
    resolve: {
      preserveSymlinks: true,
      // alias: {
      //   'react/jsx-runtime': 'node_modules/react/jsx-runtime.js',
      //   '@fluentui/react-components': 'node_modules/@fluentui/react-components/lib/index.js'
      // },
    },

    root: process.cwd(),
    publicDir: false,
    base: "/",

    optimizeDeps: {
      include: ['react/jsx-runtime'],
    },

    define: {
      __TIME__: new Date().getTime(),
      "import.meta.env.time": new Date().getTime(),
      VITE_TIME: new Date().getTime(),
      // CRAWLS: await fg(["{,**/}{.*,*}"], {
      //   ...mmDefaultOpts,
      //   ignore: [...mmDefaultOpts.ignore!.filter(v => v.search("public") > 0), "tsconfig.*", "*.config.*", "pnpm*", "package*"]
      // })
    },
  } as UserConfig;

  return ret;
});
