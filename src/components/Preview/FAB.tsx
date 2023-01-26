import { CompoundButton, CompoundButtonProps, tokens } from "@fluentui/react-components";
import { CodeFilled, WindowNewFilled } from "@fluentui/react-icons";

export const compoundButtonProps: CompoundButtonProps = {
  appearance: 'transparent',
  target: 'blank',
  size: 'small',
  as: 'a',
  style: {margin: '0px 0.5rem'},
};

export const fabStyles: React.CSSProperties = {
  position: 'absolute',
  right: '2rem',
  bottom: '2rem',
  background: tokens.colorNeutralBackground1,
  boxShadow: tokens.shadow8,
  borderRadius: tokens.borderRadiusMedium,
  padding: tokens.spacingVerticalS,
};

export type FABProps = {
  url: string | undefined,
  source: string | undefined,
};

export const FAB = ({url, source}: FABProps) => 
  <div style={fabStyles}>
    <CompoundButton {...compoundButtonProps} icon={<WindowNewFilled />} href={url}></CompoundButton>
    <CompoundButton {...compoundButtonProps} icon={<CodeFilled />} href={source}></CompoundButton>
  </div>
