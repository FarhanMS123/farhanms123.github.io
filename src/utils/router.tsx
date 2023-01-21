import Executor from '@/components/Executor';
import IFrame from '@/components/Preview/IFrame';
import ERoutes, { EDemos, ETools } from '@/consts/ERoutes';
import Demos from '@/pages/Demos';
import Tools from '@/pages/Tools';
import { createHashRouter, Navigate, RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: ERoutes.HOME,
    element: (<Executor func={() => window.location.replace('https://github.com/FarhanMS123')} />),
  }, 
  {
    path: ERoutes.TOOLS,
    element: (<Tools />),
    children: [
      {
        path: ERoutes.TOOLS,
        element: (<Navigate to={ETools.determinan} />),
      },
      {
        path: ETools.ANSI,
        element: (<IFrame url={new URL(ETools.ANSI + '.html', import.meta.url).href} source='https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages/tools/ANSI.html' />),
      },
      {
        path: ETools.ajax2write,
        element: (<IFrame url={new URL(ETools.ajax2write + '.php', import.meta.url).href} source='https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages/tools/ajax2write.php' />),
      },
      {
        path: ETools.determinan,
        element: (<IFrame url={new URL(ETools.determinan + '.html', import.meta.url).href} source='https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages/tools/determinan.html' />),
      },
      {
        path: ETools.forEverLoop,
        element: (<IFrame url={new URL(ETools.forEverLoop + '.html', import.meta.url).href} source='https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages/tools/foreverloop.html' />),
      },
      {
        path: ETools.htmlEditor,
        element: (<IFrame url={new URL(ETools.htmlEditor + '.html', import.meta.url).href} source='https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages/tools/htmlEditor.html' />),
      },
      {
        path: ETools.htmlEditor2,
        element: (<IFrame url={new URL(ETools.htmlEditor2 + '.html', import.meta.url).href} source='https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages/tools/htmlEditor2.html' />),
      },
      {
        path: ETools.mlg,
        element: (<IFrame url={new URL(ETools.mlg + '.html', import.meta.url).href} source='https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages/tools/mlg.html' />),
      },
      {
        path: ETools.pitung,
        element: (<IFrame url={new URL(ETools.pitung + '.js', import.meta.url).href} source='https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages/tools/pitung.js' />),
      },
    ],
  },
  {
    path: ERoutes.DEMOS,
    element: (<Demos />),
    children: [
      {
        path: ERoutes.DEMOS,
        element: (<Navigate to={EDemos.blank} />),
      },
      {
        path: EDemos.blank,
        element: (<IFrame url={new URL(EDemos.blank + '.html', import.meta.url).href} source={`https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages${EDemos.blank}.html`} />),
      },
      {
        path: EDemos.GBCS,
        element: (<IFrame url={new URL(EDemos.GBCS + '.html', import.meta.url).href} source={`https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages${EDemos.GBCS}.html`} />),
      },
      {
        path: EDemos.micecho,
        element: (<IFrame url={new URL(EDemos.micecho + '.html', import.meta.url).href} source={`https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages${EDemos.micecho}.html`} />),
      },
    ],
  },
];

export const router = createHashRouter(routes);

export { ERoutes };
