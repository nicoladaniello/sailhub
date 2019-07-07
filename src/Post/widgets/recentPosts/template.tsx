import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

export interface RecentPostsWidgetTemplateProps {
  posts?: any;
}

const RecentPostsWidgetTemplate: React.SFC<RecentPostsWidgetTemplateProps> = ({
  posts
}) => {
  const { edges: list } = posts;
  return (
    <ListGroup>
      <div>
        <p>Recent Posts</p>
      </div>
      {list.map(({ node: post }: any) => (
        <ListGroupItem key={post.postId}>
          <Link to={`/wordpress/blog/${post.uri}`}>{post.title}</Link>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default RecentPostsWidgetTemplate;
