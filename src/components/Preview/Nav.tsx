import { INavLinkGroup } from "@fluentui/react"
import NavItem from "./NavItem"

export type TNavProps = {
  groups: INavLinkGroup[] | null,
}

export default function Nav({ groups }: TNavProps){
  return (
    <>
      { groups?.map(item => <NavItem navLinks={ item } />) }
    </>
  )
}
