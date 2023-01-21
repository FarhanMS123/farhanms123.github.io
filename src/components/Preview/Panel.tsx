import ERoutes from "@/consts/ERoutes";
import { INavLinkGroup, IStackItemProps, IStackItemStyles, Stack } from "@fluentui/react";
import { tokens, Toolbar, ToolbarButton } from "@fluentui/react-components";
import { generatePath, Link, resolvePath, useLocation, useResolvedPath } from "react-router-dom";
import Nav from "./Nav";

export const panelStyles: IStackItemStyles = {
  root: {
    background: tokens.colorNeutralBackground2,
    height: '100%',
    width: '320px',
    maxWidth: '100%',
  }
};

export const titleStyles: React.CSSProperties = {
  fontSize: tokens.fontSizeBase500,
  fontWeight: tokens.fontWeightSemibold,
  textAlign: 'center',
  margin: '2rem 1rem 1rem 1rem',

};

export type TPreviewPanelProps = IStackItemProps & {
  navGroups: INavLinkGroup[] | null,
};

export default function Panel({ navGroups, ...props }: TPreviewPanelProps) {
  const location = useLocation();

  return (
    <Stack.Item {...props} shrink styles={panelStyles}>
      <p style={titleStyles}>FarhanMS123</p>
      <Toolbar>
        <ToolbarButton as="a" href="https://github.com/FarhanMS123">Github</ToolbarButton>
        <Link to={ERoutes.TOOLS} type="button" role="button" style={{textDecoration: 'none'}}>
          <ToolbarButton appearance={location.pathname.indexOf(ERoutes.TOOLS) >= 0 ? 'primary' : 'subtle'}>Tools</ToolbarButton>
        </Link>
        <Link to={ERoutes.DEMOS} type="button" role="button" style={{textDecoration: 'none'}}>
          <ToolbarButton appearance={location.pathname.indexOf(ERoutes.DEMOS) >= 0 ? 'primary' : 'subtle'}>Demos</ToolbarButton>
        </Link>
      </Toolbar>
      <Nav groups={navGroups} />
    </Stack.Item>
  );
}
