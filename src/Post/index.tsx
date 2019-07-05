import React from "react";
import { Query, QueryResult } from "react-apollo";
import { getPost } from "./queries";
import PostTemplate from "./template";

export interface PostProps {
  match: any;
}

const Post: React.SFC<PostProps> = ({ match }) => {
  const { uri } = match.params;

  return (
    <Query query={getPost} variables={{ uri: uri }}>
      {({ data, loading, error }: QueryResult) => {
        if (error) console.log(error);
        if (error) return <div>error!</div>;
        if (loading) return <div>loading...</div>;
        if (!data) return <div>Nothing here...</div>;

        const { postBy } = data;
        console.log(postBy);
        return <PostTemplate data={postBy} />;
      }}
    </Query>
  );
};

export default Post;
