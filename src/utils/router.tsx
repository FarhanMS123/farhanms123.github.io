import ERoutes from '@/consts/ERoutes';
import { createHashRouter, RouteObject } from 'react-router-dom';

import Home from '@/pages/Home';

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (<Home />)
  }
];

export const router = createHashRouter(routes);

export { ERoutes };
