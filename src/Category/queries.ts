import gql from "graphql-tag";

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

export const getCategoryPosts = gql`
  query GET_CATEGORY_POSTS($slug: [String]) {
    categories(where: { slug: $slug }) {
      edges {
        node {
          id
          categoryId
          name
          slug
          posts {
            nodes {
              id
              title
              date
              uri
              excerpt
              featuredImage {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;
