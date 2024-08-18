import React from "react";
import { Link, makeStyles, mergeClasses, Table, TableBody, TableCell, TableCellLayout, TableHeader, TableHeaderCell, TableRow, tokens } from "@fluentui/react-components";
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm';
import { Viewer } from "~/viewer.page";

export const useMarkdownStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1
  },
});

export const components: Partial<Components> = {
  a: ({ node, children, ...props }) => <Link inline {...props}>{ children }</Link>,
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
      <TableCellLayout>{children}</TableCellLayout>
    </TableCell>
  },
};

export default function Markdown({ url, className }: Viewer) {
  const styles = useMarkdownStyles();
  const { data: md_text } = useQuery({
    queryFn: async () => fetch(url).then((res) => res.text()),
    queryKey: ["md_text"],
  });

  return <div className={mergeClasses(styles.root, "p-2 lg:p-4", className)}>
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>{md_text}</ReactMarkdown>
  </div>;
}
