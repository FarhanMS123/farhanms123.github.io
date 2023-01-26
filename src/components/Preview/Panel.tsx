import ERoutes from "@/consts/ERoutes";
import { INavLinkGroup, IStackItemProps, IStackItemStyles, Stack } from "@fluentui/react";
import { tokens, Toolbar, ToolbarButton } from "@fluentui/react-components";
import { Link, useLocation } from "react-router-dom";
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

function forAppearance(match: string){
  return location.pathname.indexOf(match) >= 0 ? 'primary' : 'subtle';
}

export default function Panel({ navGroups, ...props }: TPreviewPanelProps) {
  const location = useLocation();

  return (
    <Stack.Item {...props} shrink styles={panelStyles}>
      <p style={titleStyles}>FarhanMS123</p>
      <Toolbar style={{width: '100%'}}>
        <ToolbarButton as="a" href="https://github.com/FarhanMS123">Github</ToolbarButton>
        <ToolbarButton as="a" href={`#${ERoutes.TOOLS}`} appearance={forAppearance(ERoutes.TOOLS)}>Tools</ToolbarButton>
        <ToolbarButton as="a" href={`#${ERoutes.DEMOS}`} appearance={forAppearance(ERoutes.DEMOS)}>Demos</ToolbarButton>
        <ToolbarButton as="a" href={`#${ERoutes.LIBS}`} appearance={forAppearance(ERoutes.LIBS)}>Libs</ToolbarButton>
      </Toolbar>
      <Nav groups={navGroups} />
    </Stack.Item>
  );
}
