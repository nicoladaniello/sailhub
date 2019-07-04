import * as React from "react";
import { Query, QueryResult } from "react-apollo";
import CategoriesTemplate from "./template";
import { getCategories } from "../../queries";
import { Alert } from "reactstrap";

export interface CategoriesProps {}

const Categories: React.SFC<CategoriesProps> = () => {
  return (
    <Query query={getCategories}>
      {({ data, loading, error }: QueryResult) => {
        if (error) {
          console.log(error);
          return <Alert color="danger">Error!</Alert>;
        }
        if (loading) return <div>Loading...</div>;

        const { edges: categories } = data.categories;
        return <CategoriesTemplate list={categories} />;
      }}
    </Query>
  );
};

export default Categories;
