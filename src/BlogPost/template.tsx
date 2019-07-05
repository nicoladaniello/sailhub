import * as React from "react";
import PageSection from "../components/partials/PageSection";
import { Row, Col, Badge } from "reactstrap";
import RecentPostsWidget from "./widgets/recentPosts";
import Categories from "../Category/widgets/CategoriesWidget";
import { Link } from "react-router-dom";
import BlogPostMeta from "./partials/PostMeta";
import PostAuthor from "./partials/PostAuthor";

export interface BlogPostTemplateProps {
  data: any;
}

const BlogPostTemplate: React.SFC<BlogPostTemplateProps> = ({ data }) => {
  const { title, author, date, featuredImage, content, categories } = data;
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
        <BlogPostMeta date={date} categories={categories} />
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
          <RecentPostsWidget />
          <Categories />
        </Col>
      </Row>
    </PageSection>
  );
};

export default BlogPostTemplate;
