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
  match?: any;
}

/**
 * Gives a queryResult containing a post to the props of a given child element;
 * The variables to query the post can be passed by props.variables or props.match.params (react-router);
 *
 */
const Post: React.SFC<PostProps> = ({ variables, match, children }) => {
  if (!variables) {
    variables = match.params;
  }

  const child = React.Children.only(children);

  return (
    <Query query={getPost} variables={variables}>
      {child}
    </Query>
  );
};

export default Post;
