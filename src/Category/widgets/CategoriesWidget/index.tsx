import * as React from "react";
import Query from "../../../components/common/Query";
import CategoriesTemplate from "./template";
import { getCategories } from "../../queries";

export interface CategoriesProps {}

const Categories: React.SFC<CategoriesProps> = () => {
  return (
    <Query query={getCategories}>
      <CategoriesTemplate />
    </Query>
  );
};

export default Categories;
