import * as React from "react";
import PageSection from "../molecules/PageSection";
import { Row, Col } from "reactstrap";

export interface BlogPostTemplateProps {
  data: any;
}

const BlogPostTemplate: React.SFC<BlogPostTemplateProps> = ({ data }) => {
  const { title, author, featuredImage, content } = data;
  return (
    <PageSection>
      <figure>
        {featuredImage && (
          <img
            src={featuredImage.sourceUrl}
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
          />
        )}
      </figure>
      <div className="text-center">
        <h1>{title}</h1>
        <p className="lead">by: {author.name}</p>
      </div>
      <hr />
      <Row className="justify-content-center">
        <Col
          md="6"
          sm="8"
          xs="12"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Row>
    </PageSection>
  );
};

export default BlogPostTemplate;
