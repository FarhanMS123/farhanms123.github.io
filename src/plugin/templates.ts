import { readFileSync } from "fs";
import { PREFIX, type InputFunc, InputValue, Option } from "./files-router";
import { dirname } from "path";

export const pattern_no_folder = "**.page.!(html)";
export const beNoFolder: (opts?: {
    ignoreSourceScript?: boolean; // default: true
}) => InputFunc = (opts) => ({ current }) => {
    let { ignoreSourceScript } = opts!;
    ignoreSourceScript ??= true;

    // ./filename/index.html
    // ./filename.page.tsx/index.html
    // ./filename_tsx/index.html
    // ./filename_tsx_page/index.html
    // ./filename_tsx_#/index.html    # >= 2

    // ./filename.html
    // ./filename_tsx.html
    // ./filename_tsx_page.html
    // ./filename.page.tsx.html
    // ./filename_tsx_#.html    # >= 2
    current.out = current.script_src + ".html";
};

export const pattern_index = "**/index.!(html)";
export const beIndex: InputFunc = ({ current }) => {
    current.out = `${dirname(current.out!)}/index.html`;
};

export const pattern_html = "**/*.html";
export const loadHtml: InputFunc = ({ input, script_src }) => {
    input[script_src] = {
        raw: "",
        script_src,
        out: null,
    };
    return input[script_src];
}

export const pattern_vue = "**/*.page.vue";
export const script_vue = readFileSync("../utils/main_vue.tsx").toString();
export const loadVue: InputFunc = ({ input, script_src, out, raw }) => {
    const _input: InputValue = {
        raw: script_vue,
        script_src,
        out: `${script_src}.ts`,
    };
    const virtual = `${PREFIX}${out}`;
    input[virtual] = _input;

    return {
        raw,
        script_src: virtual,
        out,
    };
}

export const defaultExcluded = [".git/**", "*.local/**", "src/**", "dist/**", "node_modules/**"];
export const defaultIncluded = [pattern_html, "**/*.page.tsx", "**/*.page.ts", "**/*.page.js"];
export const extendedIncluded = ["**/*.html", "**/*.page.tsx", pattern_vue, "**/*.md", "**/*.page.ts", "**/*.page.js"];

export const defaultPages: Option["pages"] = [
    { [pattern_no_folder]: beNoFolder(), },
    { [pattern_index]: beIndex, },
    { [pattern_html]: loadHtml, },
    { [pattern_vue]: loadVue, },
];