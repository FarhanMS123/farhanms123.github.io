import React from "react";
import { Link, makeStyles, mergeClasses, Table, TableBody, TableCell, TableCellLayout, TableHeader, TableHeaderCell, TableRow, tokens } from "@fluentui/react-components";
import { useQuery } from "@tanstack/react-query";

import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm';
import remarkHTML from 'remark-html';
import remarkYamlConfig from "remark-yaml-config";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdx from "remark-mdx";
import rehypeHighlight from "rehype-highlight";
import rehypeReact from "rehype-react";
import rehypeRaw from "rehype-raw";

import hljs from 'highlight.js';
import dockerfile from "highlight.js/lib/languages/dockerfile"
import "highlight.js/styles/an-old-hope.css"

import { Viewer } from "~/viewer.html.page";

hljs.registerLanguage("dockerfile", dockerfile);

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

export function MarkdownURL({ url, className }: Viewer) {
  const { data: md_text } = useQuery({
    queryFn: async () => fetch(url).then((res) => res.text()),
    queryKey: ["md_text"]
  });
  return <Markdown content={md_text} className={className} />
}

export function MarkdownCode({ url, className }: Viewer) {
  const { data: md_text } = useQuery({
    queryFn: async () => fetch(url).then((res) => res.text()),
    queryKey: ["md_text"]
  });
  return <Markdown content={`
File: \`${url}\`
${"```"}
${md_text}
${"```"}
  `} className={className} />
}

export function Markdown({ className, content }: Omit<Viewer, "url">) {
  const styles = useMarkdownStyles();

  return <div className={mergeClasses(styles.root, "p-2 lg:p-4", className)}>
    <ReactMarkdown remarkPlugins={[
      remarkFrontmatter,
      remarkYamlConfig,
      // remarkHTML,
      remarkGfm,
      // remarkMdx,
    ]} rehypePlugins={[
      [rehypeHighlight, {detect: true}],
      // rehypeReact,
      rehypeRaw,
    ]} components={components} skipHtml={false}>{content}</ReactMarkdown>
  </div>;
}
