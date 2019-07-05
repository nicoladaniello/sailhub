import * as React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

export interface PostExcerptTemplateProps {
  data: any;
}

const PostExcerptTemplate: React.SFC<PostExcerptTemplateProps> = ({ data }) => {
  const { title, date, uri, featuredImage, excerpt } = data;

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
        <CardText dangerouslySetInnerHTML={{ __html: excerpt }} />
        <CardText className="small text-muted">
          posted on: {new Date(date).toLocaleDateString()}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default PostExcerptTemplate;
