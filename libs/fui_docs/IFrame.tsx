import { mergeClasses } from "@fluentui/react-components";
import { useAtom } from "jotai";
import React from "react";
import { $whitefill, type Viewer } from "~/viewer.html.page";

export default function IFrame({ url }: Viewer) {
  const [whitefill, setWhitefill] = useAtom($whitefill);
  console.log(whitefill);
  return <iframe src={url} className={mergeClasses("w-full h-full border-none", whitefill ? "bg-white text-black" : "")} />;
}
