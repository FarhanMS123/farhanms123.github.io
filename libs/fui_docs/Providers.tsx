import React from "react";
import { FluentProvider, type FluentProviderProps, makeStyles, mergeClasses, teamsDarkTheme, tokens } from "@fluentui/react-components";
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

export function Providers({ children, fluent }: {
  fluent?: Partial<FluentProviderProps>;
} & React.PropsWithChildren) {
  const classes = useProvidersStyles();
  return <>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <FluentProvider theme={teamsDarkTheme} {...fluent} className={mergeClasses("h-full overflow-auto w-full", classes.root, fluent?.className)}>
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
