import ERoutes from "@/consts/ERoutes";
import { makeStyles, shorthands, tokens, Toolbar, ToolbarButton, useOverflowMenu } from "@fluentui/react-components";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Link, useLocation } from "react-router-dom";
import { INavLink } from ".";
import Nav from "./Nav";

export const usePanelStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground2,
    height: '100%',
    width: '320px',
    maxWidth: '100%',
    flexBasis: 'auto',
    flexShrink: 0,
  },
  linkNoDecoration: {
    textDecorationLine: 'none',
  },
  title: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    textAlign: 'center',
    ...(shorthands.margin('2rem', '1rem', '1rem', '1rem')),
  }
});

function forAppearance(match: string){
  const location = useLocation();
  return location.pathname.indexOf(match) >= 0 ? 'primary' : 'subtle';
}

type ToolbarOverflowButtonProps = {
  route: string;
  name: string
};

function CustomToolbarButton({ route, name }: ToolbarOverflowButtonProps){
  const classes = usePanelStyles();
  const appearance = forAppearance(route);

  return (
    <Link to={route} className={classes.linkNoDecoration}>
      <ToolbarButton as="button" appearance={appearance}>{name}</ToolbarButton>
    </Link>
  );
}

export type TPreviewPanelProps = {
  navGroups: INavLink[] | null,
};

export default function Panel({ navGroups }: TPreviewPanelProps) {
  const classes = usePanelStyles();

  return (
    <div className={classes.root}>
      <p className={classes.title}>FarhanMS123</p>
      <OverlayScrollbarsComponent defer options={{scrollbars: {autoHide: 'leave', theme: 'os-theme-light'}}}>
        <Toolbar>
          <ToolbarButton as="a" href="https://github.com/FarhanMS123">Github</ToolbarButton>
          <CustomToolbarButton route={ERoutes.TOOLS} name="Tools" />
          <CustomToolbarButton route={ERoutes.DEMOS} name="Demos" />
          <CustomToolbarButton route={ERoutes.LIBS} name="Libs" />
        </Toolbar>
      </OverlayScrollbarsComponent>
      <Nav groups={navGroups} />
    </div>
  );
}
