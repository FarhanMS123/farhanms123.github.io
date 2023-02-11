import { makeStyles, shorthands } from "@fluentui/react-components";
import { FAB } from "./FAB";

const useIFrameStyles = makeStyles({
  wh100: {
    width: '100%', 
    height: '100%', 
    ...(shorthands.border('0px')),
    backgroundColor: 'white',
    position: 'relative',
  }
});

export type IFrameProps = {
  url: string | undefined,
  source: string | undefined,
};

export default function IFrame({ url, source }: IFrameProps) {
  const classes = useIFrameStyles();

  return (
    <div className={classes.wh100}>
      <iframe src={url} className={classes.wh100}></iframe>
      <FAB url={url} source={source} />
    </div>
  )
}
