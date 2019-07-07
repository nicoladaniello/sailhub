import * as React from "react";
import Category from "../..";
import CategoryPageTemplate from "./template";

export interface CategoryPageProps {
  match?: any;
}

const CategoryPage: React.SFC<CategoryPageProps> = ({ match }) => {
  const { slug } = match.params;

  return (
    <Category variables={{ slug }}>
      <CategoryPageTemplate />
    </Category>
  );
};

export default CategoryPage;
