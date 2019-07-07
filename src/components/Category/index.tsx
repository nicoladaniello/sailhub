import * as React from "react";
import Query from "../common/Query";
import { getCategory } from "./queries";

interface Variables {
  slug?: string;
}

export interface CategoryProps {
  variables?: Variables;
  match?: any;
}

const Category: React.SFC<CategoryProps> = ({ variables, match, children }) => {
  if (!variables) variables = match.params;

  const child = React.Children.only(children);
  if (!React.isValidElement(child))
    throw new Error("Category component expects a valid child element!");

  return (
    <Query query={getCategory} variables={variables}>
      {(data: any) => {
        const { node: category } = data.categories.edges[0];
        return React.cloneElement(child, { category });
      }}
    </Query>
  );
};

export default Category;
