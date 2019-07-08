import * as React from "react";
import { ListGroup, ListGroupItem, Card, CardHeader } from "reactstrap";
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
    <Card className="mb-4">
      <CardHeader>{title}</CardHeader>
      <ListGroup flush>
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
    </Card>
  );
};

export default CategoryListWidgetTemplate;
