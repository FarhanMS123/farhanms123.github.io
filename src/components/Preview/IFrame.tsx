export type IFrameProps = {
  url: string,
  source: string,
  docs?: string,
};

const wh100 = {width: '100%', height: '100%', border: '0px', background: 'white'};

export default function IFrame({ url, source, docs }: IFrameProps) {
  return (
    <div style={wh100}>
      <iframe src={url} style={wh100}></iframe>
    </div>
  )
}
