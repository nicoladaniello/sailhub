import React from "react";
import { Query, QueryResult } from "react-apollo";
import { getBlogPostExerpt } from "./queries";
import BlogPostCardTemplate from "./BlogPostCardTemplate";

export interface BlogPostCardProps {
  match: any;
}

const BlogPostCard: React.SFC<BlogPostCardProps> = ({ match }) => {
  const { uri } = match.params;

  return (
    <Query query={getBlogPostExerpt} variables={{ uri: uri }}>
      {({ data, loading, error }: QueryResult) => {
        if (error) console.log(error);
        if (error) return <div>error!</div>;
        if (loading) return <div>loading...</div>;
        if (!data) return <div>Nothing here...</div>;

        const { postBy } = data;
        console.log(postBy);
        return <BlogPostCardTemplate data={postBy} />;
      }}
    </Query>
  );
};

export default BlogPostCard;
