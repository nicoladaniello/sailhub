import * as React from "react";
import Query from "../common/Query";
import { getTag } from "./queries";

export interface TagVariables {
  slug: string[];
}

export interface TagProps {
  variables: TagVariables;
}

const Tag: React.SFC<TagProps> = ({ variables, children }) => {
  const child = React.Children.only(children);
  if (!React.isValidElement(child))
    throw new Error("Category component expects a valid child element!");

  return (
    <Query query={getTag} variables={variables}>
      {(data: any) => {
        const { node: tag } = data.tags.edges[0];
        return React.cloneElement(child, { tag });
      }}
    </Query>
  );
};

export default Tag;
