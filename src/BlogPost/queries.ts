import gql from "graphql-tag";

/**
 * Get a BlogPost data by its uri: useful for Pages
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
 * Get a BlogPost excerpt data by its uri: useful for cards
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

/**
 * Get a BlogPosts list: useful for lists
 */
export const getBlogPostList = gql`
  query GET_BLOGPOST_LIST($first: Int) {
    posts(first: $first) {
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
 * Get a BlogPosts titles list: useful for widgets
 */
export const getBlogPostTitleList = gql`
  query GET_BLOGPOSTS($first: Int) {
    posts(first: $first) {
      edges {
        node {
          id
          postId
          title
          uri
        }
      }
    }
  }
`;
