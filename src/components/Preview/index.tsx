import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { Outlet } from "react-router-dom";
import Panel from "./Panel";

export const usePreviewStyles = makeStyles({
  stack: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    ...(shorthands.overflow('hidden')),
  },
  view: {
    width: '100%',
    backgroundColor: tokens.colorNeutralBackground1,
    minWidth: 0,
    flexBasis: 'auto',
    flexShrink: 1,
  }
});

export type INavLink = {
  name: string,
  links: {
    name: string,
    url: string,
  }[],
};

export type TPreviewProps = {
  navGroups: INavLink[] | null,
};

export default function Preview({ navGroups }: TPreviewProps){
  const classes = usePreviewStyles();

  return (
    <div className={classes.stack}>
      <Panel navGroups={navGroups} />
      <div className={classes.view}>
        <Outlet />
      </div>
    </div>
  );
}
