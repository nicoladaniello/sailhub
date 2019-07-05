import React from "react";
import Query from "../components/common/Query";
import { getPost } from "./queries";
import PostTemplate from "./template";

export interface PostProps {
  match: any;
}

const Post: React.SFC<PostProps> = ({ match }) => {
  const { uri } = match.params;

  return (
    <Query query={getPost} variables={{ uri: uri }}>
      <PostTemplate />
    </Query>
  );
};

export default Post;
