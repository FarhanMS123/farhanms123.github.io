import { mergeClasses } from "@fluentui/react-components";
import { atom, useAtom } from "jotai";
import React from "react";
import { type Viewer } from "~/viewer.html.page";

export const $whitefill = atom(false);

export default function IFrame({ url }: Viewer) {
  const [whitefill] = useAtom($whitefill);
  return <>
    <iframe src={url} className={mergeClasses("w-full h-full border-none", whitefill ? "bg-white !text-black" : "")} />
  </>;
}
