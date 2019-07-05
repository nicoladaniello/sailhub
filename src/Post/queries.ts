import gql from "graphql-tag";

/**
 * Get a Post data by its uri: useful for Pages
 */
export const getPost = gql`
  query getPost($uri: String!) {
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
      categories {
        edges {
          node {
            id
            categoryId
            slug
            name
          }
        }
      }
    }
  }
`;

/**
 * Get a Post excerpt data by its uri: useful for cards
 */
export const getPostExerpt = gql`
  query getPostExerpt($uri: String!) {
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
 * Get a Posts list: useful for lists
 */
export const getPostList = gql`
  query getPostList($first: Int) {
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
 *
 */
export const getPostsByCategory = gql`
  query getPostsByCategory($catId: Int!) {
    posts(where: { categoryId: $catId }) {
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
 * Get a Posts titles list: useful for widgets
 */
export const getPostTitleList = gql`
  query getPostTitleList($first: Int) {
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
