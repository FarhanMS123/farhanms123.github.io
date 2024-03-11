/* eslint-disable @typescript-eslint/ban-ts-comment */
/// @ts-ignore
import { createApp } from 'vue';

/// @ts-ignore
import App from '%SCRIPT_SRC%';
import { createRoot } from './helper';

const root = createRoot();

createApp(App).mount(root);