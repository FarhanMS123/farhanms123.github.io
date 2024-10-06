import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

import Viewer from '~/viewer.html.page';
import { useQuery } from '@tanstack/react-query';

export function Code({ url, className }: Viewer) {
  const { data: md_text } = useQuery({
    queryFn: async () => fetch(url).then((res) => res.text()),
    queryKey: ["md_text", url],
  });

  console.log(url, md_text);

  if (md_text) {
    return <Editor defaultValue={md_text} defaultPath={url} path={url} theme="vs-dark" value={md_text} />
  }
  return <></>;
}
