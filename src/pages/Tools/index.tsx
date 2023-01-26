import Preview from "@/components/Preview";
import { ETools } from "@/consts/ERoutes";
import { INavLinkGroup } from "@fluentui/react";

const links: INavLinkGroup[] = [
  {
    name: "Legacy",
    isExpanded: true,
    links: [
      {
        name: "ANSI",
        url: ETools.ANSI
      },
      {
        name: "Determinan",
        url: ETools.determinan
      },
      {
        name: "For Ever Loop",
        url: ETools.forEverLoop
      },
      {
        name: "HTML Editor",
        url: ETools.htmlEditor
      },
      {
        name: "HTML Editor 2",
        url: ETools.htmlEditor2
      },
      {
        name: "MLG",
        url: ETools.mlg
      },
    ],
  }
];

export default function Tools(){
  return (
    <Preview navGroups={links} />
  );
}
