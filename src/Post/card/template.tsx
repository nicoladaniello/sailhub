import * as React from "react";
import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";
import { Link } from "react-router-dom";

export interface PostCardTemplateProps {
  data?: any;
}

const PostCardTemplate: React.SFC<PostCardTemplateProps> = ({ data }) => {
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

export default PostCardTemplate;
