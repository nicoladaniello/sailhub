import * as React from "react";
import { Row, Col } from "reactstrap";
import BlogPostCardTemplate from "../card/template";

export interface BlogPostListTemplateProps {
  list: any[];
}

const BlogPostListTemplate: React.SFC<BlogPostListTemplateProps> = ({
  list
}) => {
  return (
    <Row>
      {list.map(({ node: blogPost }) => (
        <Col key={blogPost.postId} md="3" sm="4">
          <BlogPostCardTemplate data={blogPost} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogPostListTemplate;
