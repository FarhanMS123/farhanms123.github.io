import React, { useEffect, useRef } from "react";
import { Link, makeStyles, mergeClasses, Table, TableBody, TableCell, TableCellLayout, TableHeader, TableHeaderCell, TableRow, tokens } from "@fluentui/react-components";
import { useQuery } from "@tanstack/react-query";

import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm';
// import remarkHTML from 'remark-html';
import remarkYamlConfig from "remark-yaml-config";
import remarkFrontmatter from "remark-frontmatter";
// import remarkMdx from "remark-mdx";
// import rehypeReact from "rehype-react";
import rehypeRaw from "rehype-raw";

import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker();
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker();
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker();
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

loader.config({ monaco });
loader.init();

import { Viewer } from "~/viewer.html.page";

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
  pre ({ node, children, ...props }) {
    const code_Props = (children as any)?.props;
    const code = code_Props?.children as string;
    console.log({node,children,props}, code.split("\n").length, `${code.split("\n").length + 4}rm`);

    if ((children as any)?.["type"] == "code") {
      return <Editor defaultValue={code} defaultLanguage={ code_Props.className?.match(/(?<=language-).*?(?=\s|$)/i)?.[0] } height={`${code.split("\n").length + 4}rem`} theme="vs-dark" />
    }
    return <pre {...props}>{ children }</pre>
  }
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

  if (md_text) {
    const content = `
File: \`${url}\`
${"```"}
${md_text}
${"```"}
`;
    return <Markdown content={content} className={className} />
  }
  return <></>;
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
      // rehypeReact,
      rehypeRaw,
    ]} components={components} skipHtml={false}>{content}</ReactMarkdown>
  </div>;
}
