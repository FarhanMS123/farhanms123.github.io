import Preview, { INavLink } from "@/components/Preview";
import { ELibs } from "@/consts/ERoutes";

const links: INavLink[] = [
  {
    name: "Legacy",
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
        name: "Pitung",
        url: ELibs.pitung,
      },
      {
        name: "If Line",
        url: ELibs.ifLine,
      },
      {
        name: "In Range",
        url: ELibs.inRange,
      },
      {
        name: "Kick Mid Arr",
        url: ELibs.kickMid_arr,
      },
      {
        name: "Range",
        url: ELibs.range,
      },
      {
        name: "Range 2",
        url: ELibs.range2,
      },
      {
        name: "Time",
        url: ELibs.time,
      },
      {
        name: "TXT to Args",
        url: ELibs.txt2args,
      },
      {
        name: "TXT to Meta",
        url: ELibs.txt2meta,
      },
    ],
  }
];

export default function Libs(){
  return (
    <Preview navGroups={links} />
  );
}
