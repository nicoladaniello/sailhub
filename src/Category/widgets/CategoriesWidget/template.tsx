import * as React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

export interface CategoriesTemplateProps {
  list: any[];
}

const CategoriesTemplate: React.SFC<CategoriesTemplateProps> = ({ list }) => {
  return (
    <ListGroup>
      <div>
        <p>Categories</p>
      </div>
      {list.map(({ node: category }: any) => (
        <ListGroupItem key={category.categoryId}>
          <Link to={`/wordpress/blog/category/${category.slug}`}>
            {category.name}
          </Link>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default CategoriesTemplate;
