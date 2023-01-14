import ERoutes from '@/consts/ERoutes';
import Home from '@/pages/Home';
import Tools from '@/pages/Tools';
import { createHashRouter, RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: ERoutes.HOME,
    element: (<Home />),
  }, {
    path: ERoutes.TOOLS,
    element: (<Tools />),
  }
];

export const router = createHashRouter(routes);

export { ERoutes };
