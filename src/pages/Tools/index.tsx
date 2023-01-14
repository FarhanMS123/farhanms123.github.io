import Preview from "@/components/Preview";
import ERoutes from "@/consts/ERoutes";
import { INavLinkGroup } from "@fluentui/react";

const links: INavLinkGroup[] = [
  {
    name: "Legacy",
    isExpanded: true,
    links: [
      {
        name: "ANSI",
        url: `${ERoutes.TOOLS}/1`
      },
      {
        name: "AJAX2Write",
        url: `${ERoutes.TOOLS}/3`
      },
      {
        name: "Determinan",
        url: `${ERoutes.TOOLS}/1`
      },
    ],
  }
];

export default function Tools(){
  return (
    <Preview navGroups={links} />
  );
}
