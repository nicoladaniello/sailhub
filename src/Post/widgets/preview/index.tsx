import * as React from "react";
import Post from "../../Post";
import PostPreviewTemplate from "./template";

export interface PostPreviewProps {
  postId: number;
  uri: string;
}

const PostPreview: React.SFC<PostPreviewProps> = ({ postId, uri }) => {
  return (
    <Post variables={{ postId, uri }}>
      <PostPreviewTemplate />
    </Post>
  );
};

export default PostPreview;
