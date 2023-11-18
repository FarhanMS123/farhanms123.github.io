import daisyui from "daisyui";
import themes from "daisyui/src/theming/themes.js";

tailwind.config = {
    plugins: [daisyui],
    daisyui: {
        // themes: Object.entries(themes).map(([k, v]) => ({ [k]: v })),
        themes: Object.keys(themes),
    },
}

// console.log(tailwind;
