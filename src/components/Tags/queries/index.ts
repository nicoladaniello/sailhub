import gql from "graphql-tag";
import postFragments from "../../Post/queries/fragments";

export const getTag = gql`
  query getTag($slug: [String]) {
    tags(where: { slug: $slug }) {
      edges {
        node {
          id
          tagId
          name
          slug
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
  ${postFragments.postPreview}
`;

export const getTags = gql`
  query getTags {
    tags {
      edges {
        node {
          id
          tagId
          name
        }
      }
    }
  }
`;
