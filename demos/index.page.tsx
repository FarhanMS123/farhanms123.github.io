import React from "react";
import { Button, Card, CardFooter, FluentProvider, makeStyles, mergeClasses, teamsDarkTheme, ToggleButton, tokens, Tree, TreeItem, TreeItemLayout } from "@fluentui/react-components";
import { ArrowNextFilled, ArrowPreviousFilled, PanelLeftContractFilled, PinFilled, PinRegular } from "@fluentui/react-icons";
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

  return <>
    <Card size="small" className={mergeClasses("h-full w-[320px] max-w-[calc(100%-1rem)] z-20 block relative", classes.cardCNB2)}>
      <header className="sp text-center m-4 mt-8">
        FarhanMS123
      </header>
      <div className="h-full">
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
      </div>
      <CardFooter className="sp p-2 mt-auto -mx-2" action={
        <Button icon={<ArrowPreviousFilled />} appearance="transparent" />
      }>
        <ToggleButton checked={true} icon={<PinFilled />} appearance="transparent" />
      </CardFooter>
    </Card>
    <Button shape="circular" appearance="primary" className="fixed left-4 bottom-4 z-10" icon={
      <ArrowNextFilled />
    } />
  </>;
}
