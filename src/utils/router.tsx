import Executor from '@/components/Executor';
import IFrame from '@/components/Preview/IFrame';
import ERoutes, { ETools } from '@/consts/ERoutes';
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
        element: (<IFrame url={new URL(ETools.ANSI + '.html', import.meta.url).href} source='' />),
      },
      {
        path: ETools.ajax2write,
        element: (<IFrame url={new URL(ETools.ajax2write + '.php', import.meta.url).href} source='' />),
      },
      {
        path: ETools.determinan,
        element: (<IFrame url={new URL(ETools.determinan + '.html', import.meta.url).href} source='' />),
      },
      {
        path: ETools.forEverLoop,
        element: (<IFrame url={new URL(ETools.forEverLoop + '.html', import.meta.url).href} source='' />),
      },
      {
        path: ETools.htmlEditor,
        element: (<IFrame url={new URL(ETools.htmlEditor + '.html', import.meta.url).href} source='' />),
      },
      {
        path: ETools.htmlEditor2,
        element: (<IFrame url={new URL(ETools.htmlEditor2 + '.html', import.meta.url).href} source='' />),
      },
      {
        path: ETools.mlg,
        element: (<IFrame url={new URL(ETools.mlg + '.html', import.meta.url).href} source='' />),
      },
      {
        path: ETools.pitung,
        element: (<IFrame url={new URL(ETools.pitung + '.js', import.meta.url).href} source='' />),
      },
    ],
  },
];

export const router = createHashRouter(routes);

export { ERoutes };
