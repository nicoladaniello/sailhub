import * as React from "react";
import PageSection from "../../../partials/PageSection";
import { Row, Col } from "reactstrap";
import PostPreviewTemplate from "../../../Post/widgets/preview/template";
import PostListWidget from "../../../Post/widgets/list";
import CategoryListWidget from "../../../Category/widgets/list";

export interface TagPageTemplateProps {
  tag?: any;
}

const TagPageTemplate: React.SFC<TagPageTemplateProps> = ({ tag }) => {
  const { name, posts } = tag;
  return (
    <PageSection>
      <div>
        <h1>
          Posts tagged <span className="text-secondary">{name}</span>
        </h1>
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

export default TagPageTemplate;
