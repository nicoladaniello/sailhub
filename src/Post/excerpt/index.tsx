import * as React from "react";
import { Query, QueryResult } from "react-apollo";
import { getPostTitleList } from "../queries";

export interface PostExcerptProps {}

const PostExcerpt: React.SFC<PostExcerptProps> = () => {
  return (
    <Query query={getPostTitleList} variables={{ first: 5 }}>
      {({ data, loading, error }: QueryResult) => {
        if (error) console.log(error);
        if (error) return <div>error!</div>;
        if (loading) return <div>loading...</div>;
        if (!data) return <div>Nothing here...</div>;

        const { edges: recentPosts } = data.posts;
        console.log(recentPosts);
        return;
      }}
    </Query>
  );
};

export default PostExcerpt;
