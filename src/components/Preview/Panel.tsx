import ERoutes from "@/consts/ERoutes";
import { INavLinkGroup, IStackItemProps, IStackItemStyles, Stack } from "@fluentui/react";
import { Overflow, OverflowItem, tokens, Toolbar, ToolbarButton, useOverflowMenu } from "@fluentui/react-components";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
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
  const location = useLocation();
  return location.pathname.indexOf(match) >= 0 ? 'primary' : 'subtle';
}

type ToolbarOverflowButtonProps = {
  route: string;
  name: string
};

function CustomToolbarButton({ route, name, ...props }: ToolbarOverflowButtonProps){
  console.log({route, name, props})
  return (
    <Link to={route} type="button" role="button" style={{textDecoration: 'none'}}>
      <ToolbarButton as="a" href={`#${route}`} appearance={forAppearance(route)} {...props}>{name}</ToolbarButton>
    </Link>
  );
}

export default function Panel({ navGroups, ...props }: TPreviewPanelProps) {
  return (
    <Stack.Item {...props} shrink styles={panelStyles}>
      <p style={titleStyles}>FarhanMS123</p>
      <OverlayScrollbarsComponent defer options={{scrollbars: {autoHide: 'leave', theme: 'os-theme-light'}}}>
        <Toolbar>
          <ToolbarButton as="a" href="https://github.com/FarhanMS123">Github</ToolbarButton>
          <CustomToolbarButton route={ERoutes.TOOLS} name="Tools" />
          <CustomToolbarButton route={ERoutes.DEMOS} name="Demos" />
          <CustomToolbarButton route={ERoutes.LIBS} name="Libs" />
        </Toolbar>
      </OverlayScrollbarsComponent>
      <Nav groups={navGroups} />
    </Stack.Item>
  );
}
