import * as React from "react";
import { getPost } from "./queries";
import Query from "../components/common/Query";

interface Variables {
  id?: string;
  postId?: number;
  uri?: string;
  slug?: string;
}

export interface PostProps {
  variables?: Variables;
}

const Post: React.SFC<PostProps> = ({ variables, children }) => {
  const child = React.Children.only(children);
  if (!React.isValidElement(child))
    throw new Error("Category component expects a valid child element!");

  return (
    <Query query={getPost} variables={variables}>
      {(data: any) => React.cloneElement(child, { post: data.postBy })}
    </Query>
  );
};

export default Post;
