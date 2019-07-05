import * as React from "react";
import Query from "../../common/Query";
import gql from "graphql-tag";
import NavbarMenuTemplate from "./template";

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
      <NavbarMenuTemplate />
    </Query>
  );
};

export default NavbarMenu;
