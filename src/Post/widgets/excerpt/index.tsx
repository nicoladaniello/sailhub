import * as React from "react";
import Post from "../../Post";
import PostExcerptTemplate from "./template";

export interface PostExcerptProps {
  postId: number;
  uri: string;
}

const PostExcerpt: React.SFC<PostExcerptProps> = ({ postId, uri }) => {
  return (
    <Post variables={{ postId, uri }}>
      <PostExcerptTemplate />
    </Post>
  );
};

export default PostExcerpt;
