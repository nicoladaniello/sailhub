import gql from "graphql-tag";
import postFragments from "../../Post/queries/fragments";
import UserFragments from "./fragments";

export const getUsers = gql`
  query getUsers {
    users {
      edges {
        node {
          ...UserProfile
        }
      }
    }
  }
  ${UserFragments.profile}
`;

export const getUser = gql`
  query getUsers($nicename: String) {
    users(where: { nicename: $nicename }) {
      edges {
        node {
          ...UserProfile
          posts {
            edges {
              node {
                ...PostPreview
              }
            }
          }
        }
      }
    }
  }
  ${UserFragments.profile}
  ${postFragments.postPreview}
`;
