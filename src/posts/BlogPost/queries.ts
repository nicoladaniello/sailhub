import gql from "graphql-tag";

/**
 * Get a Blog Post data by its uri: useful for Pages
 */
export const getBlogPost = gql`
  query GET_BLOGPOST($uri: String!) {
    postBy(uri: $uri) {
      id
      postId
      title
      excerpt
      content
      date
      uri
      author {
        firstName
        lastName
        name
      }
      featuredImage {
        sourceUrl
      }
    }
  }
`;
