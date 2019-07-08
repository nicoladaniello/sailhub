import gql from "graphql-tag";

const postFragments: any = {};

postFragments.author = gql`
  fragment Author on Post {
    author {
      firstName
      lastName
      name
    }
  }
`;
postFragments.featuredImage = gql`
  fragment FeaturedImage on Post {
    featuredImage {
      sourceUrl
    }
  }
`;
postFragments.categories = gql`
  fragment Categories on Post {
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
`;
postFragments.tags = gql`
  fragment Tags on Post {
    tags {
      edges {
        node {
          id
          tagId
          slug
          name
        }
      }
    }
  }
`;
postFragments.postPreview = gql`
  fragment PostPreview on Post {
    id
    postId
    title
    excerpt
    date
    uri
    ...Author
    ...FeaturedImage
  }
  ${postFragments.author}, ${postFragments.featuredImage}
`;

postFragments.postFull = gql`
  fragment PostFull on Post {
    id
    postId
    title
    content
    date
    uri
    ...Author
    ...FeaturedImage
    ...Categories
    ...Tags
  }
  ${postFragments.author}, ${postFragments.featuredImage},
  ${postFragments.categories}, ${postFragments.tags}
`;

export default postFragments;
