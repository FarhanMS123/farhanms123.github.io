import { FAB } from "./FAB";

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

export default function IFrame({ url, source }: IFrameProps) {
  return (
    <div style={wh100}>
      <iframe src={url} style={wh100}></iframe>
      <FAB url={url} source={source} />
    </div>
  )
}
