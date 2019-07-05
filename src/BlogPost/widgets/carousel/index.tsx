import * as React from "react";
import { Query, QueryResult } from "react-apollo";
import { getBlogPostList, getBlogPostsByCategory } from "../../queries";
import BlogPostCarouselWidgetTemplate from "./template";

export interface BlogPostCarouselWidgetProps {
  title: string;
  categoryId?: number;
}

const BlogPostCarouselWidget: React.SFC<BlogPostCarouselWidgetProps> = ({
  title,
  categoryId
}) => {
  let query = undefined;
  let vars = undefined;

  if (categoryId) {
    query = getBlogPostsByCategory;
    vars = { catId: categoryId };
  } else {
    query = getBlogPostList;
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
        return (
          <BlogPostCarouselWidgetTemplate title={title} list={recentPosts} />
        );
      }}
    </Query>
  );
};

export default BlogPostCarouselWidget;
