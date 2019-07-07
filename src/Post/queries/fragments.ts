import gql from "graphql-tag";

const fragments: any = {};

fragments.author = gql`
  fragment Author on Post {
    author {
      firstName
      lastName
      name
    }
  }
`;
fragments.featuredImage = gql`
  fragment FeaturedImage on Post {
    featuredImage {
      sourceUrl
    }
  }
`;
fragments.categories = gql`
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

fragments.postPreview = gql`
  fragment PostPrevew on Post {
    id
    postId
    title
    excerpt
    date
    uri
    ...Author
    ...FeaturedImage
  }
  ${fragments.author}, ${fragments.featuredImage}
`;

fragments.postFull = gql`
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
  }
  ${fragments.author}, ${fragments.featuredImage}, ${fragments.categories}
`;

export default fragments;
