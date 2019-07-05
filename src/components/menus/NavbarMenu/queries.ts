import gql from "graphql-tag";

export const getNavbarMenus = gql`
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
