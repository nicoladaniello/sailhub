import gql from "graphql-tag";

let UserFragments: any = {};

UserFragments.avatar = gql`
  fragment UserAvatar on User {
    avatar {
      default
      foundAvatar
      isRestricted
      width
      height
      size
      rating
      url
    }
  }
`;

UserFragments.profile = gql`
  fragment UserProfile on User {
    id
    userId
    name
    firstName
    lastName
    nicename
    description
    registeredDate
    ...UserAvatar
  }
  ${UserFragments.avatar}
`;

export default UserFragments;
