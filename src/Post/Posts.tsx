import * as React from "react";
import Query from "../components/common/Query";
import { getPostList } from "./queries";

interface Variables {
  first?: number;
  title?: string;
  dateQuery?: { year: string; month: string; day: string };
  author?: number;
  authorIn?: string;
  authorNotIn?: string;
  authorName?: String;
  categoryId?: number;
}

export interface PostsProps {
  variables: any;
}

const Posts: React.SFC<PostsProps> = ({ variables, children }) => {
  const child = React.Children.only(children);

  return (
    <Query query={getPostList} variables={variables}>
      {child}
    </Query>
  );
};

export default Posts;
