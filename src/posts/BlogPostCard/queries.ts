import gql from "graphql-tag";

/**
 * Get a Blog Post exerpt data by its uri: useful for cards
 */
export const getBlogPostExerpt = gql`
  query GET_BLOGPOST_EXERPT($uri: String!) {
    postBy(uri: $uri) {
      id
      postId
      title
      excerpt
      date
      uri
      author {
        name
      }
      featuredImage {
        sourceUrl
      }
    }
  }
`;
