import * as React from "react";
import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";
import { Link } from "react-router-dom";

export interface PostCardTemplateProps {
  post?: any;
}

const PostCardTemplate: React.SFC<PostCardTemplateProps> = ({ post }) => {
  const { title, date, uri, featuredImage } = post;
  return (
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
  );
};

export default PostCardTemplate;
