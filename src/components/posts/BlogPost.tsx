import React, { Children } from "react";
import { Query, QueryResult } from "react-apollo";
import gql from "graphql-tag";

const GET_POST_BY_POST_ID = gql`
  query GET_POST($postId: Int!) {
    postBy(postId: $postId) {
      id
      postId
      title
      excerpt
      content
      date
      uri
      author {
        id
        firstName
        lastName
        name
      }
      featuredImage {
        id
        sourceUrl
      }
    }
  }
`;

export interface BlogPostProps {
  match: any;
}

const BlogPost: React.SFC<BlogPostProps> = ({ match, children }) => {
  const { postId } = match.params;

  return (
    <Query query={GET_POST_BY_POST_ID} variables={{ postId: postId }}>
      {({ data, loading, error }: QueryResult) => {
        if (error) console.log(error);
        if (error) return <div>error!</div>;
        if (loading) return <div>loading...</div>;
        if (!data) return <div>Nothing here...</div>;

        const { postBy } = data;

        console.log(data);
        if (!React.isValidElement(children))
          throw new Error(
            "Component BlogPost expects a valid element as a child!"
          );
        return React.cloneElement(children, { post: postBy });
      }}
    </Query>
  );
};

export default BlogPost;
