import { INavLinkGroup } from "@fluentui/react";
import { SelectTabData, SelectTabEvent, SelectTabEventHandler, Tab, TabList, TabListProps } from "@fluentui/react-components";
import { useEffect, useState } from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";

export type TNavItemProps = TabListProps & {
  navLinks: INavLinkGroup,
};

export default function NavItem({ navLinks, key, ...props }: TNavItemProps){
  const location = useLocation();
  const navigate = useNavigate();

  function onTabSelect(e: SelectTabEvent, data: SelectTabData){
    navigate(data.value as string);
  }
  
  return (
    <div {...props}>
      <h3 style={{paddingLeft: '1rem'}}>{navLinks.name}</h3>
      <TabList key={key} defaultSelectedValue={location.pathname} onTabSelect={onTabSelect} size='medium' vertical>
        { navLinks.links.map((item) => <Tab value={item.url}>{item.name}</Tab>) }
      </TabList>
    </div>
  );
}
