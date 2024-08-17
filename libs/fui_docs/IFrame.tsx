import React from "react";
import { Viewer } from "~/viewer.page";

export default function IFrame({ url }: Viewer) {
  return <iframe src={url} className="w-full h-full border-none bg-white" />;
}
