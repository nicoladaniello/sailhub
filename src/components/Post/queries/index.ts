import gql from "graphql-tag";
import PostFragments from "./fragments";

/**
 * Get a Post data by its uri: useful for Pages
 */
export const getPost = gql`
  query getPost($id: ID, $postId: Int, $uri: String, $slug: String) {
    postBy(id: $id, postId: $postId, uri: $uri, slug: $slug) {
      ...PostFull
    }
  }
  ${PostFragments.postFull}
`;

/**
 * Get a Post excerpt data by its uri: useful for cards
 */
export const getPostPreview = gql`
  query getPostPreview($id: ID, $postId: Int, $uri: String, $slug: String) {
    postBy(id: $id, postId: $postId, uri: $uri, slug: $slug) {
      ...PostPreview
    }
  }
  ${PostFragments.postPreview}
`;

/**
 * Get a Posts list: useful for lists
 */
export const getPostList = gql`
  query getPostList(
    $first: Int
    $title: String
    $dateQuery: DateQueryInput
    $author: Int
    $authorIn: [ID]
    $authorNotIn: [ID]
    $authorName: String
    $categoryId: Int
  ) {
    posts(
      first: $first
      where: {
        title: $title
        dateQuery: $dateQuery
        author: $author
        authorIn: $authorIn
        authorNotIn: $authorNotIn
        authorName: $authorName
        categoryId: $categoryId
      }
    ) {
      edges {
        node {
          ...PostPreview
        }
      }
    }
  }
  ${PostFragments.postPreview}
`;
