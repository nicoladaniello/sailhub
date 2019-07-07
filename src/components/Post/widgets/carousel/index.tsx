import * as React from "react";
import PostCarouselWidgetTemplate from "./template";
import Posts from "../../Posts";

export interface PostCarouselWidgetProps {
  title: string;
  categoryId?: number;
}

const PostCarouselWidget: React.SFC<PostCarouselWidgetProps> = ({
  title,
  categoryId
}) => {
  return (
    <Posts variables={{ categoryId }}>
      <PostCarouselWidgetTemplate title={title} />
    </Posts>
  );
};

export default PostCarouselWidget;
