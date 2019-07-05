import * as React from "react";
import Query from "../components/common/Query";
import { getCategoryPosts } from "./queries";
import CategoryTemplate from "./template";

export interface CategoryProps {
  match: any;
}

const Category: React.SFC<CategoryProps> = ({ match }) => {
  const { uri } = match.params;

  return (
    <Query query={getCategoryPosts} variables={{ slug: uri }}>
      <CategoryTemplate />
    </Query>
  );
};

export default Category;
