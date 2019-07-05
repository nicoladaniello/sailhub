import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export interface NavbarMenuTemplateProps {
  queryResult?: any;
}

const NavbarMenuTemplate: React.SFC<NavbarMenuTemplateProps> = ({
  queryResult
}) => {
  const menu = queryResult.menus.nodes[0];
  return (
    <Nav key={menu.menuId} className="ml-auto" navbar>
      {menu.menuItems.edges.map((menuItem: any) => (
        <NavItem key={menuItem.node.menuItemId}>
          <NavLink tag={Link} to={menuItem.node.url}>
            {menuItem.node.label}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavbarMenuTemplate;
