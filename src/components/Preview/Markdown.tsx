import ERoutes from '@/consts/ERoutes';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useOverlayScrollbars } from 'overlayscrollbars-react';
import { useEffect, useMemo, useRef } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { FAB } from "./FAB";
import { NormalComponents } from 'react-markdown/lib/complex-types';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { Link, Toolbar, ToolbarButton, ToolbarGroup } from '@fluentui/react-components';
import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell, TableCellLayout } from '@fluentui/react-components/unstable';
import { WindowNewFilled } from '@fluentui/react-icons';

export type CodeviewProps = {
  url: string,
  source: string,
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
  minWidth: 'calc(100% - 4rem)',
  minHeight: 'calc(100% - 2rem)',
  padding: '0rem 2rem 1rem 2rem',
  marginTop: '-1.5rem',
};

const components: Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents> | undefined = {
  a ({node, children, ...props}) {
    return <Link inline={true} as="a" {...props}>{children}</Link>
  },
  table ({node, children, ...props}) {
    return <Table {...props}>{children}</Table>
  },
  thead ({node, children, ...props}) {
    return <TableHeader {...props}>{children}</TableHeader>
  },
  tbody ({node, children, ...props}) {
    return <TableBody {...props}>{children}</TableBody>
  },
  tr ({node, children, ...props}) {
    return <TableRow {...props}>{children}</TableRow>
  },
  th ({node, children, ...props}) {
    return <TableHeaderCell>{children}</TableHeaderCell>
  },
  td ({node, children, ...props}) {
    return <TableCell {...props}>
      <TableCellLayout >{children}</TableCellLayout>
    </TableCell>
  },
}

export default function Markdown({ url, source }: CodeviewProps) {
  const queryClient = useQueryClient();
  const {data, isSuccess} = useQuery(url ?? ERoutes.LIBS, () => fetch(url).then(res => res.text()) );

  const ref = useRef<HTMLDivElement>(null);
  const [initialize, instance] = useOverlayScrollbars({defer: true, options: { scrollbars: { theme: 'os-theme-light' } }});

  useEffect(() => {
    /// @ts-ignore
    initialize(ref.current);
  }, [initialize]);

  return (
    <div style={wh100}>
      <div ref={ref} className='code-container' style={whPre}>
        <Toolbar style={{justifyContent: 'end', marginTop: '1rem', marginRight: '2rem'}}>
          <ToolbarGroup>
            <ToolbarButton as="a" target="_blank" href={source} icon={<WindowNewFilled />}>Open in new tab</ToolbarButton>
          </ToolbarGroup>
        </Toolbar>
        <div style={whCode}>
          <ReactMarkdown children={data ?? ''} remarkPlugins={[remarkGfm]} components={components} />
        </div>
      </div>
    </div>
  )
}
