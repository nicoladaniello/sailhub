import * as React from "react";
import Query from "../common/Query";
import { getCategories } from "./queries";

export interface CategoriesVariables {
  slug?: string;
}

export interface CategoriesProps {
  variables?: CategoriesVariables;
}

const Categories: React.SFC<CategoriesProps> = ({ variables, children }) => {
  const child = React.Children.only(children);
  if (!React.isValidElement(child))
    throw new Error("Category component expects a valid child element!");

  return (
    <Query query={getCategories} variables={variables}>
      {(data: any) =>
        React.cloneElement(child, { categories: data.categories })
      }
    </Query>
  );
};

export default Categories;
