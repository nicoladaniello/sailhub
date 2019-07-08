import * as React from "react";
import { Card, CardBody, CardText, Badge, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

export interface TagListTemplateProps {
  title: string;
  tags?: any;
}

const TagListTemplate: React.SFC<TagListTemplateProps> = ({ title, tags }) => {
  const { edges: list } = tags;
  return (
    <Card className="mb-4">
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <CardText>
          {list.map(({ node: tag }: any) => (
            <Badge
              pill
              className="mx-1"
              key={tag.tagId}
              tag={Link}
              to={`/wordpress/blog/tagged/${tag.slug}`}
            >
              {tag.name}
            </Badge>
          ))}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default TagListTemplate;
