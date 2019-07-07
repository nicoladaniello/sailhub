import * as React from "react";
import PageSection from "../../../components/partials/PageSection";
import SectionHeading from "../../../components/partials/SectionHeading";
import PostCardTemplate from "../card/template";
import { Row, Col } from "reactstrap";

export interface PostCarouselWidgetTemplateProps {
  title: string;
  posts?: any;
}

const PostCarouselWidgetTemplate: React.SFC<
  PostCarouselWidgetTemplateProps
> = ({ title, posts }) => {
  const { edges: list } = posts;
  return (
    <PageSection>
      <SectionHeading title={title} />
      <Row>
        {list.map(({ node: post }: any) => (
          <Col key={post.postId} lg="2" md="4" sm="6" xs="6">
            <PostCardTemplate post={post} />
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

export default PostCarouselWidgetTemplate;
