import ERoutes from '@/consts/ERoutes';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/base16/equilibrium-dark.css';
import { useMemo } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { FAB } from "./FAB";

hljs.registerLanguage('javascript', javascript);

export type CodeviewProps = {
  url: string,
  source: string,
  docs?: string,
};

const wh100: React.CSSProperties = {
  width: '100%', 
  height: '100%',
  border: '0px', 
  position: 'relative',
  overflow: 'hidden',
};

const whPre: React.CSSProperties = {
  width: '100%',
  height: '100%',
  overflow: 'auto',
  margin: 0,
};

const whCode: React.CSSProperties = {
  height: 'fit-content',
  width: 'fit-content',
  minWidth: 'calc(100% - 2rem)',
  minHeight: 'calc(100% - 2rem)',
  padding: '1rem',
};

export default function Codeview({ url, source }: CodeviewProps) {
  const queryClient = useQueryClient();
  const {data, isSuccess} = useQuery(url ?? ERoutes.LIBS, () => fetch(url).then(res => res.text()) );
  const parsed = useMemo(() => hljs.highlightAuto(data ?? ''), [data]);

  return (
    <div style={wh100}>
      <pre style={whPre}>
        <code className="hljs" style={whCode} dangerouslySetInnerHTML={{__html: parsed.value}} />
      </pre>
      <FAB url={url} source={source} />
    </div>
  )
}
