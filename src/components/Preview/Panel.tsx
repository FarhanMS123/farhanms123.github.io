import { INavLinkGroup, IStackItemProps, IStackItemStyles, Nav, Stack } from "@fluentui/react";
import { tokens } from "@fluentui/react-components";

export const panelStyles: IStackItemStyles = {
  root: {
    background: tokens.colorNeutralBackground2,
    height: '100%',
    width: '320px',
    maxWidth: '100%',
    // boxShadow: Depths.depth8,
  }
};

export const titleStyles: React.CSSProperties = {
  fontSize: tokens.fontSizeBase500,
  fontWeight: tokens.fontWeightSemibold,
  textAlign: 'center',
  margin: '2rem 1rem',
};

export type TPreviewPanelProps = IStackItemProps & {
  navGroups: INavLinkGroup[] | null,
};

export default function Panel({ navGroups, ...props }: TPreviewPanelProps) {
  return (
    <Stack.Item {...props} shrink styles={panelStyles}>
      <p style={titleStyles}>FarhanMS123</p>
      <Nav groups={navGroups} />
    </Stack.Item>
  );
}
