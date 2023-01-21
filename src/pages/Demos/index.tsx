import Preview from "@/components/Preview";
import { EDemos } from "@/consts/ERoutes";
import { INavLinkGroup } from "@fluentui/react";

const links: INavLinkGroup[] = [
  {
    name: "Legacy",
    isExpanded: true,
    links: [
      {
        name: "Blank Page",
        url: EDemos.blank,
      },
      {
        name: "GBCS (Garbage Count System)",
        url: EDemos.GBCS,
      },
      {
        name: "Mic Echo",
        url: EDemos.micecho,
      },
    ],
  }
];

export default function Demos(){
  return (
    <Preview navGroups={links} />
  );
}
