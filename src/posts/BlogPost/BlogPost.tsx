import React from "react";
import { Query, QueryResult } from "react-apollo";
import { getBlogPost } from "./queries";
import BlogPostTemplate from "./BlogPostTemplate";

export interface BlogPostProps {
  match: any;
}

const BlogPost: React.SFC<BlogPostProps> = ({ match }) => {
  const { uri } = match.params;

  return (
    <Query query={getBlogPost} variables={{ uri: uri }}>
      {({ data, loading, error }: QueryResult) => {
        if (error) console.log(error);
        if (error) return <div>error!</div>;
        if (loading) return <div>loading...</div>;
        if (!data) return <div>Nothing here...</div>;

        const { postBy } = data;
        console.log(postBy);
        return <BlogPostTemplate data={postBy} />;
      }}
    </Query>
  );
};

export default BlogPost;
