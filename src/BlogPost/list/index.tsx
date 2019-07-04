import React from "react";
import { Query, QueryResult } from "react-apollo";
import { getBlogPostList } from "../queries";
import BlogPostListTemplate from "./template";

export interface BlogPostListProps {}

const BlogPostList: React.SFC<BlogPostListProps> = () => {
  return (
    <Query query={getBlogPostList}>
      {({ data, loading, error }: QueryResult) => {
        if (error) console.log(error);
        if (error) return <div>error!</div>;
        if (loading) return <div>loading...</div>;
        if (!data) return <div>Nothing here...</div>;

        const { edges: posts } = data.posts;
        console.log(posts);
        return <BlogPostListTemplate list={posts} />;
      }}
    </Query>
  );
};

export default BlogPostList;
