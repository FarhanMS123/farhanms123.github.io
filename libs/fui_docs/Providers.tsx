import React from "react";
import { FluentProvider, makeStyles, mergeClasses, teamsDarkTheme, tokens } from "@fluentui/react-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter } from "react-router-dom";
import { Provider as JotaiProvider } from "jotai";

// import { logEvent } from "firebase/analytics";
// import { firebaseConfig, app, analytics } from '~/libs/legacy/firebase';

// import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
// import 'overlayscrollbars/overlayscrollbars.css';
import "libs/tailwind_global.css";
import "libs/fui_docs/main.css";

export const useProvidersStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground3,
  },
});

export const queryClient = new QueryClient();

export function Providers({ children }: React.PropsWithChildren) {
  const classes = useProvidersStyles();
  return <>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <FluentProvider theme={teamsDarkTheme} className={mergeClasses("h-full overflow-auto flex w-full", classes.root)}>
          <JotaiProvider>
            {/* <OverlayScrollbarsComponent defer> */}
              { children }
            {/* </OverlayScrollbarsComponent> */}
          </JotaiProvider>
        </FluentProvider>
      </QueryClientProvider>
    </HashRouter>
  </>;
}
