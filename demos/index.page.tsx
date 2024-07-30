import React, { useState } from "react";
import { Button, Card, CardFooter, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerHeaderTitle, FluentProvider, makeStyles, mergeClasses, teamsDarkTheme, ToggleButton, tokens, Tree, TreeItem, TreeItemLayout, useRestoreFocusSource, useRestoreFocusTarget } from "@fluentui/react-components";
import { ArrowNextFilled, ArrowPreviousFilled, DismissRegular, PanelLeftContractFilled, PinFilled, PinRegular } from "@fluentui/react-icons";
import "../libs/global_tailwind.css";
import "../libs/fui_docs/main.css"

const useDocsStyles = makeStyles({
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

export default function Docs() {
  const classes = useDocsStyles();
  return <>
    <FluentProvider theme={teamsDarkTheme} className={mergeClasses("h-full overflow-auto block", classes.root)}>
      <SidePanel />
    </FluentProvider>
  </>;
}

export function SidePanel() {
  const classes = useDocsStyles();

  // Overlay Drawer will handle focus by default, but inline Drawers need manual focus restoration attributes, if applicable
  const restoreFocusTargetAttributes = useRestoreFocusTarget();
  const restoreFocusSourceAttributes = useRestoreFocusSource();

  const [pin, setPin] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  return <>
    {/* <i aria-label="tailwind-reserve-keyword" className="hidden" /> */}
    <Drawer
      {...restoreFocusSourceAttributes}
      className={mergeClasses("!h-full", classes.cardCNB2)}
      type={pin ? "inline" : "overlay"}
      separator
      open={isOpen}
      onOpenChange={(_, { open }) => setIsOpen(open)}
    >
      <DrawerHeader>
        <DrawerHeaderTitle
          action={
            <Button
              appearance="subtle"
              aria-label="Close"
              icon={<DismissRegular />}
              onClick={() => setIsOpen(false)}
            />
          }
        >
          Default Drawer
        </DrawerHeaderTitle>
      </DrawerHeader>

      <header className="sp text-center m-4 mt-8">
        FarhanMS123
      </header>

      <DrawerBody>
        <p>Drawer content</p>
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
        </Tree>
      </DrawerBody>

      <DrawerFooter className="flex-row-reverse !justify-between">
        <Button icon={<ArrowPreviousFilled />} appearance="transparent" onClick={() => setIsOpen(false)} />
        <ToggleButton checked={pin} icon={pin ? <PinFilled /> : <PinRegular />} appearance="transparent" onClick={() => setPin(pin => !pin)} />
      </DrawerFooter>
    </Drawer>
    <Button {...restoreFocusTargetAttributes} shape="circular" appearance="primary"
      className={mergeClasses("fixed left-4 bottom-4 z-10", isOpen ? "!hidden" : "")}
      icon={ <ArrowNextFilled /> } onClick={() => setIsOpen(true)} hidden={isOpen} />
  </>;
}
