import * as React from "react";
import Query from "../../common/Query";
import NavbarMenuTemplate from "./template";
import { getNavbarMenus } from "./queries";

export interface NavbarMenuProps {}

const NavbarMenu: React.SFC<NavbarMenuProps> = () => {
  return (
    <Query query={getNavbarMenus}>
      {(data: any) => {
        return <NavbarMenuTemplate menu={data.menus.nodes[0]} />;
      }}
    </Query>
  );
};

export default NavbarMenu;
