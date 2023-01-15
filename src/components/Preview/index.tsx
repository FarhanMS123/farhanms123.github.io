import { Depths, getTheme, INavLinkGroup, IStackItemProps, IStackItemStyles, IStackStyles, IStackTokens, Stack } from "@fluentui/react";
import { tokens } from "@fluentui/react-components";
import { Outlet } from "react-router-dom";
import Panel from "./Panel";

export const layoutStackTokens: IStackTokens = {
  childrenGap: 0
};

export const stackStyles: IStackStyles = {
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
};

export const viewStyles: IStackItemStyles = {
  root: {
    background: tokens.colorNeutralBackground1,
  }
};

export type TPreviewProps = IStackItemProps & {
  navGroups: INavLinkGroup[] | null,
};

export default function Preview({ navGroups, ...props }: TPreviewProps){
  const theme = getTheme();
  return (
    <Stack {...props} theme={theme} horizontal enableScopedSelectors styles={stackStyles} tokens={layoutStackTokens}>
      <Panel navGroups={navGroups} />
      <Stack.Item grow styles={viewStyles}>
        <Outlet />
      </Stack.Item>
    </Stack>
  );
}
