import * as React from "react";
import PageSection from "../../../components/partials/PageSection";
import SectionHeading from "../../../components/partials/SectionHeading";
import BlogPostCardTemplate from "../../card/template";
import { Row, Col } from "reactstrap";

export interface BlogPostCarouselWidgetTemplateProps {
  title: string;
  list: any[];
}

const BlogPostCarouselWidgetTemplate: React.SFC<
  BlogPostCarouselWidgetTemplateProps
> = ({ title, list }) => {
  return (
    <PageSection>
      <SectionHeading title={title} />
      <Row>
        {list.map(({ node: post }: any) => (
          <Col key={post.postId} md="2" sm="3" xs="6">
            <BlogPostCardTemplate data={post} />
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

export default BlogPostCarouselWidgetTemplate;
