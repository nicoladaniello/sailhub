import * as React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Jumbotron, Media } from "reactstrap";
import PageSection from "../../../partials/PageSection";
import PostListWidget from "../../../Post/widgets/list";
import CategoryListWidget from "../../../Category/widgets/list";
import TagList from "../../../Tags/widgets/list";
import PostCardTemplate from "../../../Post/widgets/card/template";

export interface UserPageTemplateProps {
  user?: any;
}

const UserPageTemplate: React.SFC<UserPageTemplateProps> = ({ user }) => {
  const {
    name,
    nicename,
    firstName,
    description,
    registeredDate,
    avatar,
    posts
  } = user;
  const hasAvatar = avatar && avatar.foundAvatar && !avatar.isRestricted;

  return (
    <PageSection>
      <Jumbotron style={{ height: "40vh" }}>
        <Media>
          {hasAvatar && (
            <Media
              className="mr-4"
              left
              tag={Link}
              to={`/wordpress/users/${nicename}`}
            >
              <Media object src={avatar.url} alt={name} />
            </Media>
          )}
          <Media body>
            <Media heading>{name}</Media>
            <small>
              User since: {new Date(registeredDate).toLocaleDateString()}
            </small>
          </Media>
        </Media>
      </Jumbotron>
      <Row className="justify-content-between">
        <Col md="8" sm="8" xs="12">
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <hr />
          <Row>
            <Col md="12">
              <h4>{firstName}'s Posts</h4>
            </Col>
            {posts.edges.map(({ node: post }: any) => (
              <Col lg="6" md="12">
                <PostCardTemplate post={post} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md="3">
          <PostListWidget title="Recent Posts" />
          <CategoryListWidget title="Categories" />
          <TagList title="Recent tags" />
        </Col>
      </Row>
    </PageSection>
  );
};

export default UserPageTemplate;
