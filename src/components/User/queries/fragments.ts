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
    Fragment UserProfile on User {
        id
        userId
        name
        ...UserAvatar
    }
    ${UserFragments.avatar}
`;

export default UserFragments;
