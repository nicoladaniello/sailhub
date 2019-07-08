import * as React from "react";
import Query from "../common/Query";
import { getTags } from "./queries";

export interface TagsVariables {
  slug: string;
}

export interface TagsProps {
  variables?: TagsVariables;
}

const Tags: React.SFC<TagsProps> = ({ variables, children }) => {
  const child = React.Children.only(children);
  if (!React.isValidElement(child))
    throw new Error("Category component expects a valid child element!");

  return (
    <Query query={getTags} variables={variables}>
      {(data: any) =>
        React.cloneElement(child, { categories: data.categories })
      }
    </Query>
  );
};

export default Tags;
