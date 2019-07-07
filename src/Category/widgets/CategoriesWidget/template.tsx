import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

export interface CategoriesTemplateProps {
  categories?: any;
}

const CategoriesTemplate: React.SFC<CategoriesTemplateProps> = ({
  categories
}) => {
  return (
    <ListGroup>
      <div>
        <p>Categories</p>
      </div>
      {categories.edges.map(({ node: category }: any) => (
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
