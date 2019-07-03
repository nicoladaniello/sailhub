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

/**
 * Get a Blog Posts data: useful for lists
 */
export const getBlogPosts = gql`
  query GET_BLOGPOSTS {
    posts {
      edges {
        node {
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
    }
  }
`;

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
