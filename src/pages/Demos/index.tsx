import Preview, { INavLink } from "@/components/Preview";
import { EDemos } from "@/consts/ERoutes";

const links: INavLink[] = [
  {
    name: "Legacy",
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
      {
        name: "Test Textarea Menu",
        url: EDemos.testTextareaMenu,
      },
    ],
  }
];

export default function Demos(){
  return (
    <Preview navGroups={links} />
  );
}
