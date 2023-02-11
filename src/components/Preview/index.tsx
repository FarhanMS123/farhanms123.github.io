import { getTheme, INavLinkGroup, IStackItemProps, IStackTokens, Stack } from "@fluentui/react";
import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { Outlet } from "react-router-dom";
import Panel from "./Panel";

export const layoutStackTokens: IStackTokens = {
  childrenGap: 0
};

export const usePreviewStyles = makeStyles({
  stack: {
    width: '100%',
    height: '100%',
    ...(shorthands.overflow('hidden')),
  },
  view: {
    width: '100%',
    backgroundColor: tokens.colorNeutralBackground1,
    minWidth: 0,
  }
});

export type TPreviewProps = IStackItemProps & {
  navGroups: INavLinkGroup[] | null,
};

export default function Preview({ navGroups, ...props }: TPreviewProps){
  const theme = getTheme();
  const classes = usePreviewStyles();

  return (
    <Stack {...props} theme={theme} horizontal enableScopedSelectors className={classes.stack} tokens={layoutStackTokens}>
      <Panel navGroups={navGroups} />
      <Stack.Item className={classes.view}>
        <Outlet />
      </Stack.Item>
    </Stack>
  );
}
