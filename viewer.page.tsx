import React, { useState } from "react";
import { Button, Divider, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerHeaderTitle, FluentProvider, Link, makeStyles, mergeClasses, teamsDarkTheme, ToggleButton, tokens, Tree, TreeItem, TreeItemLayout, useRestoreFocusSource, useRestoreFocusTarget } from "@fluentui/react-components";
import { ArrowPreviousFilled, PinFilled, PinRegular } from "@fluentui/react-icons";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import useToggle from 'beautiful-react-hooks/useToggle'
import mm from "picomatch"
import { useLocation, useNavigate, HashRouter } from 'react-router-dom';
// import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
// import 'overlayscrollbars/overlayscrollbars.css';
import "libs/tailwind_global.css";
import "libs/fui_docs/main.css"
import type { StructDir } from "./libs/utils_v1";
import IFrame from "./libs/fui_docs/IFrame";
import Markdown from "./libs/fui_docs/Markdown";

export type Viewer = {
  url: string;
  src?: string;
} & Pick<React.HTMLAttributes<HTMLDivElement>, "className">;

export const queryClient = new QueryClient();

export const useDocsStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground3,
  },
  cardCNB2: {
    "& header.sp": {
      fontSize: tokens.fontSizeBase500,
      fontWeight: tokens.fontWeightSemibold,
    },
    backgroundColor: tokens.colorNeutralBackground2,
    "& .fui-CardFooter.sp": {
      backgroundColor: tokens.colorSubtleBackgroundInvertedHover,
    },
  }
});

export default Viewer;

export function Viewer() {
  return (
    <Providers>
      <SidePanel />
      <div className="block w-full h-full flex-1 overflow-auto">
        <Content />
      </div>
    </Providers>
  );
}

export function Providers({ children }: React.PropsWithChildren) {
  const classes = useDocsStyles();
  return <>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <FluentProvider theme={teamsDarkTheme} className={mergeClasses("h-full overflow-auto flex w-full", classes.root)}>
          {/* <OverlayScrollbarsComponent defer> */}
            { children }
          {/* </OverlayScrollbarsComponent> */}
        </FluentProvider>
      </QueryClientProvider>
    </HashRouter>
  </>;
}

export function SidePanel() {
  const classes = useDocsStyles();

  // Overlay Drawer will handle focus by default, but inline Drawers need manual focus restoration attributes, if applicable
  const restoreFocusTargetAttributes = useRestoreFocusTarget();
  const restoreFocusSourceAttributes = useRestoreFocusSource();

  const { data: dirs } = useQuery({
    queryFn: async () => fetch("/.dirs.json").then(async (res) => (await res.json()) as StructDir),
    queryKey: ["dirs"],
  });
  const [pin, togglePin] = useToggle(true);
  const [isOpen, setIsOpen] = useState(true);

  return <>
    <Drawer
      {...restoreFocusSourceAttributes}
      className={mergeClasses("!h-full", classes.cardCNB2)}
      type={pin ? "inline" : "overlay"}
      separator
      open={isOpen}
      onOpenChange={(_, { open }) => setIsOpen(open)}
    >
      <DrawerHeader className="mb-4">
        <DrawerHeaderTitle className="!justify-center">
          FarhanMS123
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody>
        <Tree>
          <TreeItem itemType="leaf">
            <TreeItemLayout>Home</TreeItemLayout>
          </TreeItem>
          <TreeItem itemType="leaf">
            <TreeItemLayout>Github</TreeItemLayout>
          </TreeItem>
          <TreeItem itemType="leaf">
            <TreeItemLayout>Medium</TreeItemLayout>
          </TreeItem>

          <Divider />

          { dirs && <TreeDirs list={dirs.list} path="/" /> }
        </Tree>
      </DrawerBody>

      <DrawerFooter className="flex-row-reverse !justify-between">
        <Button icon={<ArrowPreviousFilled />} appearance="transparent" onClick={() => setIsOpen(false)} />
        <ToggleButton checked={pin} icon={pin ? <PinFilled /> : <PinRegular />} appearance="transparent" onClick={() => togglePin()} />
      </DrawerFooter>
    </Drawer>
    <Button {...restoreFocusTargetAttributes} shape="circular" appearance="primary"
      className={mergeClasses("fixed left-2 bottom-4 !p-0 !min-w-2 min-h-16 z-10", isOpen ? "!hidden" : "")}
      onClick={() => setIsOpen(true)} hidden={isOpen} />
  </>;
}

export function TreeDirs({ list, path }: {
  list: StructDir["list"];
  path: string;
}) {
  const navigate = useNavigate();
  return list.map((v) => {
    if (typeof v == "object") return (
      <TreeItem key={`${path}${v.name}/`} itemType="branch">
        <TreeItemLayout>{v.name}</TreeItemLayout>
        <Tree>
          <TreeDirs list={v.list} path={`${path}${v.name}/`} />
        </Tree>
      </TreeItem>
    );
    else return (
      <TreeItem key={`${path}${v}`} itemType="leaf">
        <Link appearance="subtle" href={`${path}${v}`} onClick={(ev) => {
          ev.preventDefault();
          navigate(`${path}${v}`)
        }}>
          <TreeItemLayout>{v}</TreeItemLayout>
        </Link>
      </TreeItem>
    )
  });
}

export function Content() {
  const location = useLocation();

  if (mm.isMatch(location.pathname, "*.md", { basename: true }))
    return (<Markdown key={`md:${location.pathname}`} url={location.pathname} className="min-h-full" />);
  return (<IFrame key={`ifrm:${location.pathname}`} url={location.pathname} />)
}
