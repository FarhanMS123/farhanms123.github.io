import ERoutes from '@/consts/ERoutes';
import { makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import markdown from 'highlight.js/lib/languages/markdown';
import 'highlight.js/styles/base16/equilibrium-dark.css';
import { useOverlayScrollbars } from 'overlayscrollbars-react';
import { useEffect, useMemo, useRef } from 'react';
import { useQuery } from 'react-query';
import { FAB } from "./FAB";

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('markdown', markdown);

export const useCodeviewStyles = makeStyles({
  root: {
    width: '100%', 
    height: '100%',
    ...(shorthands.border('0px')),
    position: 'relative',
    ...(shorthands.overflow('hidden')),
  },
  pre: {
    width: '100%',
    height: '100%',
    ...(shorthands.overflow('auto')),
    ...(shorthands.margin(tokens.spacingVerticalNone, tokens.spacingHorizontalNone))
  },
  code: {
    height: 'fit-content',
    width: 'fit-content',
    minWidth: 'calc(100% - 2rem)',
    minHeight: 'calc(100% - 2rem)',
    ...(shorthands.padding('1rem')),
  }
});

export type CodeviewProps = {
  url: string,
  source: string,
  docs?: string,
};

export default function Codeview({ url, source }: CodeviewProps) {
  const {data} = useQuery(url ?? ERoutes.LIBS, () => fetch(url).then(res => res.text()) );
  const parsed = useMemo(() => hljs.highlightAuto(data ?? ''), [data]);

  const classes = useCodeviewStyles();

  const ref = useRef<HTMLPreElement>(null);
  const [initialize] = useOverlayScrollbars({defer: true, options: { scrollbars: { theme: 'os-theme-light' } }});

  useEffect(() => {
    /// @ts-ignore
    initialize(ref.current);
  }, [initialize]);

  return (
    <div className={classes.root}>
      <pre ref={ref} className={mergeClasses('code-container', classes.pre)}>
        <code className={mergeClasses("hljs", classes.code)} dangerouslySetInnerHTML={{__html: parsed.value}} />
      </pre>
      <FAB url={url} source={source} />
    </div>
  )
}
