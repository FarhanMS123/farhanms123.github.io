import Executor from '@/components/Executor';
import Codeview from '@/components/Preview/Codeview';
import IFrame from '@/components/Preview/IFrame';
import ERoutes, { EDemos, ELibs, ETools } from '@/consts/ERoutes';
import Demos from '@/pages/Demos';
import Libs from '@/pages/Libs';
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
  {
    path: ERoutes.LIBS,
    element: <Libs />,
    children: [
      {
        path: ERoutes.LIBS,
        element: (<Navigate to={ELibs.README} />),
      },
      {
        path: ELibs.README,
        element: (<Codeview url={new URL(ELibs.README, import.meta.url).href} source={`https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages${ELibs.README}`} />),
      },
      {
        path: ELibs.buried,
        element: (<IFrame url={new URL(ELibs.buried, import.meta.url).href} source={`https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages${ELibs.buried}`} />),
      },
      {
        path: ELibs.project,
        element: (<IFrame url={new URL(ELibs.project, import.meta.url).href} source={`https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages${ELibs.project}`} />),
      },
      {
        path: ELibs.pitung,
        element: <Codeview url={new URL(ELibs.pitung, import.meta.url).href} source={`https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages${ELibs.pitung}`} />,
      },
      {
        path: ELibs.ifLine,
        element: <Codeview url={new URL(ELibs.ifLine, import.meta.url).href} source={`https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages${ELibs.ifLine}`} />,
      },
      {
        path: ELibs.inRange,
        element: (<Codeview url={new URL(ELibs.inRange, import.meta.url).href} source={`https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages${ELibs.inRange}`} />),
      },
      {
        path: ELibs.kickMid_arr,
        element: (<Codeview url={new URL(ELibs.kickMid_arr, import.meta.url).href} source={`https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages${ELibs.kickMid_arr}`} />),
      },
      {
        path: ELibs.range,
        element: (<Codeview url={new URL(ELibs.range, import.meta.url).href} source={`https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages${ELibs.range}`} />),
      },
      {
        path: ELibs.range2,
        element: (<Codeview url={new URL(ELibs.range2, import.meta.url).href} source={`https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages${ELibs.range2}`} />),
      },
      {
        path: ELibs.time,
        element: (<Codeview url={new URL(ELibs.time, import.meta.url).href} source={`https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages${ELibs.time}`} />),
      },
      {
        path: ELibs.txt2args,
        element: (<Codeview url={new URL(ELibs.txt2args, import.meta.url).href} source={`https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages${ELibs.txt2args}`} />),
      },
      {
        path: ELibs.txt2meta,
        element: (<Codeview url={new URL(ELibs.txt2meta, import.meta.url).href} source={`https://github.com/FarhanMS123/farhanms123.github.io/blob/gh-pages${ELibs.txt2meta}`} />),
      },
    ],
  },
];

export const router = createHashRouter(routes);

export { ERoutes };
