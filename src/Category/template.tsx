import * as React from "react";
import PageSection from "../components/partials/PageSection";
import { Row, Col } from "reactstrap";
import RecentPostsWidget from "../BlogPost/widgets/recentPosts";
import Categories from "./widgets/CategoriesWidget";
import BlogPostExcerptTemplate from "../BlogPost/excerpt/template";

export interface CategoryTemplateProps {
  data: any;
}

const CategoryTemplate: React.SFC<CategoryTemplateProps> = ({ data }) => {
  const { name, posts } = data.node;

  return (
    <PageSection>
      <div>
        <h1>Category: {name}</h1>
      </div>
      <hr />
      <Row className="justify-content-center">
        <Col md="8" sm="8" xs="12">
          {posts.nodes.map((post: any, i: any) => (
            <BlogPostExcerptTemplate key={i} data={post} />
          ))}
        </Col>
        <Col md="4">
          <RecentPostsWidget />
          <Categories />
        </Col>
      </Row>
    </PageSection>
  );
};

export default CategoryTemplate;
