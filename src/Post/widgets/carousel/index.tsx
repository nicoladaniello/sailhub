import * as React from "react";
import { Query, QueryResult } from "react-apollo";
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
      {({ data, loading, error }: QueryResult) => {
        console.log(data, error);
        if (error) console.log(error);
        if (error) return <div>error!</div>;
        if (loading) return <div>loading...</div>;
        if (!data) return <div>Nothing here...</div>;

        const { edges: recentPosts } = data.posts;
        return <PostCarouselWidgetTemplate title={title} list={recentPosts} />;
      }}
    </Query>
  );
};

export default PostCarouselWidget;
