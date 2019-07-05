import * as React from "react";
import Query from "../../../components/common/Query";
import { getPostList, getPostsByCategory } from "../../queries";
import PostCarouselWidgetTemplate from "./template";

export interface PostCarouselWidgetProps {
  title: string;
  categoryId?: number;
}

const PostCarouselWidget: React.SFC<PostCarouselWidgetProps> = ({
  title,
  categoryId
}) => {
  let query = undefined;
  let vars = undefined;

  if (categoryId) {
    query = getPostsByCategory;
    vars = { catId: categoryId };
  } else {
    query = getPostList;
  }

  return (
    <Query query={query} variables={vars}>
      <PostCarouselWidgetTemplate title={title} />
    </Query>
  );
};

export default PostCarouselWidget;
