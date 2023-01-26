import Preview from "@/components/Preview";
import { ELibs } from "@/consts/ERoutes";
import { INavLinkGroup } from "@fluentui/react";

const links: INavLinkGroup[] = [
  {
    name: "Legacy",
    isExpanded: true,
    links: [
      {
        name: "README",
        url: ELibs.README,
      },
      {
        name: "Buried [PNG]",
        url: ELibs.buried,
      },
      {
        name: "Project [PNG]",
        url: ELibs.project,
      },
      {
        name: "If Line",
        url: ELibs.ifLine,
      },
      {
        name: "In Range",
        url: ELibs.inRange,
      },
    ],
  }
];

export default function Libs(){
  return (
    <Preview navGroups={links} />
  );
}
