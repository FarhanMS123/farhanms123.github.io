import React from "react";
import type { Viewer } from "~/viewer.html.page";

export default function IFrame({ url }: Viewer) {
  return <iframe src={url} className="w-full h-full border-none" />;
}
