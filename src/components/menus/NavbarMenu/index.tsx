import * as React from "react";
import Query from "../../common/Query";
import NavbarMenuTemplate from "./template";
import { getNavbarMenus } from "./queries";

export interface NavbarMenuProps {}

const NavbarMenu: React.SFC<NavbarMenuProps> = () => {
  return (
    <Query query={getNavbarMenus}>
      <NavbarMenuTemplate />
    </Query>
  );
};

export default NavbarMenu;
