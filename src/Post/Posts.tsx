import * as React from "react";
import Query from "../components/common/Query";
import { getPostList } from "./queries";

export interface PostsVariables {
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
  variables: PostsVariables;
}

const Posts: React.SFC<PostsProps> = ({ variables, children }) => {
  const child = React.Children.only(children);
  if (!React.isValidElement(child))
    throw new Error("Category component expects a valid child element!");

  return (
    <Query query={getPostList} variables={variables}>
      {(data: any) => React.cloneElement(child, { posts: data.posts })}
    </Query>
  );
};

export default Posts;
