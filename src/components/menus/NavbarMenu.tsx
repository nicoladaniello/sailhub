import * as React from "react";
import { Query, QueryResult } from "react-apollo";
import gql from "graphql-tag";
import { Nav, NavItem, NavLink } from "reactstrap";

const GET_NAVBAR_MENU = gql`
  {
    menus(where: { location: NAVBAR_MENU }) {
      nodes {
        menuId
        name
        menuItems {
          edges {
            node {
              menuItemId
              title
              url
              description
              label
            }
          }
        }
      }
    }
  }
`;

export interface NavbarMenuProps {}

const NavbarMenu: React.SFC<NavbarMenuProps> = () => {
  return (
    <Query query={GET_NAVBAR_MENU}>
      {({ data, loading, error }: QueryResult) => {
        if (loading || !data) return <div>loading...</div>;
        if (error) return <div>error!</div>;

        const { menus } = data;
        return menus.nodes
          ? menus.nodes.map((menu: any) => (
              <Nav key={menu.menuId} className="ml-auto" navbar>
                {menu.menuItems.edges.map((menuItem: any) => (
                  <NavItem key={menuItem.node.menuItemId}>
                    <NavLink href={menuItem.node.url}>
                      {menuItem.node.label}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            ))
          : null;
      }}
    </Query>
  );
};

export default NavbarMenu;
