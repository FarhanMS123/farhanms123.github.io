import { CompoundButton, CompoundButtonProps, makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { CodeFilled, WindowNewFilled } from "@fluentui/react-icons";

export const useFabStyles = makeStyles({
  root: {
    position: 'absolute',
    right: '2rem',
    bottom: '2rem',
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow8,
    ...(shorthands.borderRadius(tokens.borderRadiusMedium)),
    ...(shorthands.padding(tokens.spacingVerticalS)),
  },
  buttons: {
    ...(shorthands.margin(tokens.spacingVerticalNone, '0.5rem'))
  }
});

export const CustomCompoundButton = ({ icon, href }: Partial<CompoundButtonProps & Pick<HTMLAnchorElement, 'href'>>) => {
  const classes = useFabStyles();

  return (
    <CompoundButton appearance="transparent" size="small" className={classes.buttons}
      as="a" target="blank" icon={icon} href={href} />
  );
}

export type FABProps = {
  url: string | undefined,
  source: string | undefined,
};

export const FAB = ({url, source}: FABProps) => {
  const classes = useFabStyles();

  return (<div className={classes.root}>
    <CustomCompoundButton icon={<WindowNewFilled />} href={url} />
    <CustomCompoundButton icon={<CodeFilled />} href={source} />
  </div>);
}
