import * as React from "react";
import PageSection from "../../../partials/PageSection";
import { Row, Col } from "reactstrap";
import PostListWidget from "../../../Post/widgets/list";
import PostPreviewTemplate from "../../../Post/widgets/preview/template";
import CategoryListWidget from "../list";

export interface CategoryPageTemplateProps {
  category?: any;
}

const CategoryPageTemplate: React.SFC<CategoryPageTemplateProps> = ({
  category
}) => {
  const { name, posts } = category;

  return (
    <PageSection>
      <div>
        <h1>Posts in category {name}</h1>
      </div>
      <hr />
      <Row className="justify-content-center">
        <Col md="8" sm="8" xs="12">
          {posts.edges.map(({ node: post }: any) => (
            <PostPreviewTemplate key={post.postId} post={post} />
          ))}
        </Col>
        <Col md="4">
          <PostListWidget title="Recent Posts" />
          <CategoryListWidget title="Categories" />
        </Col>
      </Row>
    </PageSection>
  );
};

export default CategoryPageTemplate;
