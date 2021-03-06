import * as React from "react";
import PageSection from "../../../partials/PageSection";
import { Row, Col } from "reactstrap";
import PostListWidget from "../list";
import PostMeta from "../../partials/PostMeta";
import CategoryListWidget from "../../../Category/widgets/list";
import TagListTemplate from "../../../Tags/widgets/list/template";
import UserCardWidgetTemplate from "../../../User/widgets/card/template";

export interface PostPageTemplateProps {
  post?: any;
}

const PostPageTemplate: React.SFC<PostPageTemplateProps> = ({ post }) => {
  const {
    title,
    author,
    date,
    featuredImage,
    content,
    categories,
    tags
  } = post;
  return (
    <PageSection>
      <figure>
        {featuredImage && (
          <img
            src={featuredImage.sourceUrl}
            alt={title}
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
          />
        )}
      </figure>
      <div className="text-center">
        <PostMeta date={date} categories={categories} />
        <h1>{title}</h1>
      </div>
      <hr />
      <Row className="justify-content-center">
        <Col md="3">
          <UserCardWidgetTemplate title="Author" user={author} />
        </Col>
        <Col md="6" sm="8" xs="12">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Col>
        <Col md="3">
          <TagListTemplate tags={tags} title="Tags" />
          <PostListWidget title="Recent Posts" />
          <CategoryListWidget title="Categories" />
        </Col>
      </Row>
    </PageSection>
  );
};

export default PostPageTemplate;
