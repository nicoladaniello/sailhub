import * as React from "react";
import PageSection from "../../../partials/PageSection";
import { Row, Col } from "reactstrap";
import PostListWidget from "../list";
import PostMeta from "../../partials/PostMeta";
import PostAuthor from "../../partials/PostAuthor";
import CategoryListWidget from "../../../Category/widgets/list";

export interface PostPageTemplateProps {
  post?: any;
}

const PostPageTemplate: React.SFC<PostPageTemplateProps> = ({ post }) => {
  const { title, author, date, featuredImage, content, categories } = post;
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
        <Col md="3" />
        <Col md="6" sm="8" xs="12">
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <hr />
          <PostAuthor author={author} />
        </Col>
        <Col md="3">
          <PostListWidget title="Recent Posts" />
          <CategoryListWidget title="Categories" />
        </Col>
      </Row>
    </PageSection>
  );
};

export default PostPageTemplate;
