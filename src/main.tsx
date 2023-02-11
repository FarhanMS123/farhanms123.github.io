import React from 'react'
import ReactDOM from 'react-dom/client'
import { logEvent } from "firebase/analytics";

import { RouterProvider } from 'react-router-dom';
import { FluentProvider, teamsDarkTheme } from '@fluentui/react-components';

import '@/styles/main.css';
import 'overlayscrollbars/overlayscrollbars.css';
import { router } from '@/utils/router';
import { firebaseConfig, app, analytics } from '@/utils/firebase';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
      <FluentProvider theme={teamsDarkTheme} style={{height:'100%', overflow:'auto', display: 'block'}}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </FluentProvider>
  </>
);
