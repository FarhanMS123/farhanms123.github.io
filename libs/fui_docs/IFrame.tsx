import { mergeClasses } from "@fluentui/react-components";
import { useAtom } from "jotai";
import { useStore } from '@nanostores/react'
import React from "react";
import { $whitefill, type Viewer } from "~/viewer.html.page";

export function B() {
  const [whitefill] = useAtom($whitefill);
  return <>whitefill: {whitefill.toString()}</>;
}

export default function IFrame({ url }: Viewer) {
  const [whitefill] = useAtom($whitefill);
  console.log("whitefill: ", whitefill, $whitefill);
  return <>
    <iframe src={url} className={mergeClasses("w-full h-full border-none", whitefill ? "bg-white text-black" : "")} />
  </>;
}
