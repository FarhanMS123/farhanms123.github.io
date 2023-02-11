import { INavLink } from ".";
import NavItem from "./NavItem"

export type TNavProps = {
  groups: INavLink[] | null,
}

export default function Nav({ groups }: TNavProps){
  return <>{groups?.map((item, i) => <NavItem navLinks={ item } key={i.toString()} />)}</>;
}
