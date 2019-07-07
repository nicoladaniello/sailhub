import * as React from "react";
import PostListWidgetTemplate from "./template";
import Posts, { PostsVariables } from "../../Posts";

export interface PostListWidgetProps {
  title: string;
  variables?: PostsVariables;
}

const PostListWidget: React.SFC<PostListWidgetProps> = ({
  title,
  variables
}) => {
  return (
    <Posts variables={{ ...variables, first: 5 }}>
      <PostListWidgetTemplate title={title} />
    </Posts>
  );
};

export default PostListWidget;
