import * as React from "react";
import PageSection from "../../../components/partials/PageSection";
import SectionHeading from "../../../components/partials/SectionHeading";
import PostCardTemplate from "../../card/template";
import { Row, Col } from "reactstrap";

export interface PostCarouselWidgetTemplateProps {
  title: string;
  queryResult?: any;
}

const PostCarouselWidgetTemplate: React.SFC<
  PostCarouselWidgetTemplateProps
> = ({ title, queryResult }) => {
  const { edges: list } = queryResult.posts;
  return (
    <PageSection>
      <SectionHeading title={title} />
      <Row>
        {list.map(({ node: post }: any) => (
          <Col key={post.postId} md="2" sm="3" xs="6">
            <PostCardTemplate data={post} />
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

export default PostCarouselWidgetTemplate;
