import * as React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

export interface CategoryListWidgetTemplateProps {
  title: string;
  categories?: any;
}

const CategoryListWidgetTemplate: React.SFC<
  CategoryListWidgetTemplateProps
> = ({ title, categories }) => {
  const { edges: list } = categories;
  return (
    <ListGroup>
      <div>
        <p>{title}</p>
      </div>
      {list.map(({ node: category }: any) => (
        <ListGroupItem
          key={category.categoryId}
          tag={Link}
          to={`/wordpress/blog/categories/${category.slug}`}
        >
          {category.name}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default CategoryListWidgetTemplate;
