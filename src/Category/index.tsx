import * as React from "react";
import { Query, QueryResult } from "react-apollo";
import { getCategoryPosts } from "./queries";
import CategoryTemplate from "./template";

export interface CategoryProps {
  match: any;
}

const Category: React.SFC<CategoryProps> = ({ match }) => {
  const { uri } = match.params;

  return (
    <Query query={getCategoryPosts} variables={{ slug: uri }}>
      {({ data, loading, error }: QueryResult) => {
        if (error) console.log(error);
        if (error) return <div>error!</div>;
        if (loading) return <div>loading...</div>;
        if (!data) return <div>Nothing here...</div>;

        const category = data.categories.edges[0];
        console.log(category);
        return <CategoryTemplate data={category} />;
      }}
    </Query>
  );
};

export default Category;
