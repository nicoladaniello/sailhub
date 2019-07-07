import * as React from "react";
import Query from "../components/common/Query";
import { getCategories } from "./queries";

interface Variables {
  slug?: string;
}

export interface CategoriesProps {
  variables?: Variables;
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
