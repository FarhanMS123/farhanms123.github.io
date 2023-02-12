import ERoutes from '@/consts/ERoutes';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useOverlayScrollbars } from 'overlayscrollbars-react';
import { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { NormalComponents } from 'react-markdown/lib/complex-types';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { Link, makeStyles, shorthands, tokens, Toolbar, ToolbarButton, ToolbarGroup, Table, 
        TableHeader, TableBody, TableRow, TableHeaderCell, TableCell, TableCellLayout } from '@fluentui/react-components';
import { WindowNewFilled } from '@fluentui/react-icons';

export const useMarkdownStyles = makeStyles({
  root: {
    width: '100%', 
    height: '100%',
    ...(shorthands.border('0px')),
    position: 'relative',
    // ...(shorthands.overflow('hidden')),
    ...(shorthands.overflow('auto')),
    ...(shorthands.margin(tokens.spacingVerticalNone, tokens.spacingHorizontalNone))

  },
  toolbar: {
    justifyContent: 'end', 
    marginTop: '1rem', 
    marginRight: '2rem'
  },
  container: {
    // width: '100%',
    // height: '100%',
    // ...(shorthands.overflow('auto')),
    // ...(shorthands.margin(tokens.spacingVerticalNone, tokens.spacingHorizontalNone))
  },
  view: {
    height: 'fit-content',
    width: 'fit-content',
    minWidth: 'calc(100% - 4rem)',
    minHeight: 'calc(100% - 2rem)',
    ...(shorthands.padding(tokens.spacingVerticalNone, '2rem', '1rem', '2rem')),
    marginTop: '-1.5rem',
  },
});

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

export type MarkdownProps = {
  url: string,
  source: string,
};

export default function Markdown({ url, source }: MarkdownProps) {
  const {data} = useQuery(url ?? ERoutes.LIBS, () => fetch(url).then(res => res.text()) );

  const classes = useMarkdownStyles();

  const ref = useRef<HTMLDivElement>(null);
  const [initialize] = useOverlayScrollbars({defer: true, options: { scrollbars: { theme: 'os-theme-light' } }});

  useEffect(() => {
    /// @ts-ignore
    initialize(ref.current);
  }, [initialize]);

  return (
    <div ref={ref} className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <ToolbarGroup>
          <ToolbarButton as="a" target="_blank" href={source} icon={<WindowNewFilled />}>Open in new tab</ToolbarButton>
        </ToolbarGroup>
      </Toolbar>
      <div className={classes.view}>
        <ReactMarkdown children={data ?? ''} remarkPlugins={[remarkGfm]} components={components} />
      </div>
    </div>
  )
}
