import * as React from "react";
import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";

export interface BlogPostCardProps {
  post?: any;
}

const BlogPostCard: React.SFC<BlogPostCardProps> = ({ post }) => {
  const { postId, title, date, uri, featuredImage } = post;
  return post ? (
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
        <CardTitle>{title}</CardTitle>
        <CardText>{date}</CardText>
      </CardBody>
    </Card>
  ) : null;
};

export default BlogPostCard;
