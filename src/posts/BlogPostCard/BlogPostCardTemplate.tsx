import * as React from "react";
import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";
import { Link } from "react-router-dom";

export interface BlogPostCardTemplateProps {
  data?: any;
}

const BlogPostCardTemplate: React.SFC<BlogPostCardTemplateProps> = ({
  data
}) => {
  const { title, date, uri, featuredImage } = data;
  return data ? (
    <Card className="cardcap">
      {featuredImage && (
        <CardImg
          top
          className="cardcap-img-cover"
          src={featuredImage.sourceUrl}
          alt={title}
        />
      )}
      <CardBody>
        <CardTitle>
          <Link to={`/wordpress/blog/${uri}`}>{title}</Link>
        </CardTitle>
        <CardText className="small">
          posted on: {new Date(date).toLocaleDateString()}
        </CardText>
      </CardBody>
    </Card>
  ) : null;
};

export default BlogPostCardTemplate;
