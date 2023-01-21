import { CompoundButton, tokens } from "@fluentui/react-components";
import { CodeFilled, WindowNewFilled } from "@fluentui/react-icons";

export type IFrameProps = {
  url: string | undefined,
  source: string | undefined,
  docs?: string,
};

const wh100: React.CSSProperties = {
  width: '100%', 
  height: '100%', 
  border: '0px', 
  background: 'white',
  position: 'relative',
};

const FAB: React.CSSProperties = {
  position: 'absolute',
  right: '1rem',
  bottom: '1rem',
  background: tokens.colorNeutralBackground1,
  boxShadow: tokens.shadow8,
  borderRadius: tokens.borderRadiusMedium,
  padding: tokens.spacingVerticalS,
};

const CustomCompoundButton = (props: any) =>
  <CompoundButton 
    appearance="transparent" 
    target="blank" 
    size="small" 
    as="a"
    style={{margin: '0px 0.5rem'}} {...props}></CompoundButton>

export default function IFrame({ url, source, docs }: IFrameProps) {
  return (
    <div style={wh100}>
      <iframe src={url} style={wh100}></iframe>
      <div style={FAB}>
        <CustomCompoundButton  icon={<WindowNewFilled />} href={url}></CustomCompoundButton>
        <CustomCompoundButton icon={<CodeFilled />} href={source}></CustomCompoundButton>
      </div>
    </div>
  )
}
