import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';
import { FluentProvider, teamsDarkTheme } from '@fluentui/react-components';
import { ThemeProvider } from '@fluentui/react';
import { PortalCompatProvider } from '@fluentui/react-portal-compat';

import '@/styles/main.css';
import { router } from '@/utils/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider style={{height:'100%', overflow:'auto', display: 'block'}}>
    <FluentProvider theme={teamsDarkTheme} style={{height:'100%', overflow:'auto'}}>
      <PortalCompatProvider>
        <RouterProvider router={router} />
      </PortalCompatProvider>
    </FluentProvider>
  </ThemeProvider>
);
