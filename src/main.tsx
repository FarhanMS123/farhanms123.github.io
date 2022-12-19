import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';
import { FluentProvider, teamsDarkTheme } from '@fluentui/react-components';

import '@styles/main.css';
import { router } from '@utils/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <FluentProvider theme={teamsDarkTheme}>
    <RouterProvider router={router} />
  </FluentProvider>
);
