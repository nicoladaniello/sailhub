import * as React from "react";
import PageSection from "../components/partials/PageSection";
import { Row, Col } from "reactstrap";
import RecentPostsWidget from "../Post/widgets/recentPosts";
import Categories from "./widgets/CategoriesWidget";
import PostPreviewTemplate from "../Post/widgets/preview/template";

export interface CategoryTemplateProps {
  category?: any;
}

const CategoryTemplate: React.SFC<CategoryTemplateProps> = ({ category }) => {
  const { name, posts } = category;

  return (
    <PageSection>
      <div>
        <h1>Category: {name}</h1>
      </div>
      <hr />
      <Row className="justify-content-center">
        <Col md="8" sm="8" xs="12">
          {posts.nodes.map((post: any, i: any) => (
            <PostPreviewTemplate key={i} post={post} />
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
