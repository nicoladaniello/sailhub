import gql from "graphql-tag";
import PostFragments from "../Post/queries/fragments";

export const getCategories = gql`
  query GET_CATEGORIES {
    categories {
      edges {
        node {
          id
          categoryId
          name
          slug
        }
      }
    }
  }
`;

export const getCategory = gql`
  query getCategory($slug: [String]) {
    categories(where: { slug: $slug }) {
      edges {
        node {
          id
          categoryId
          name
          slug
          posts {
            nodes {
              ...PostPrevew
            }
          }
        }
      }
    }
  }
  ${PostFragments.postPreview}
`;
