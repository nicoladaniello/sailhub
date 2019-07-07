import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

export interface PostListWidgetTemplateProps {
  title: string;
  posts?: any;
}

const PostListWidgetTemplate: React.SFC<PostListWidgetTemplateProps> = ({
  title,
  posts
}) => {
  const { edges: list } = posts;
  return (
    <ListGroup>
      <div>
        <p>{title}</p>
      </div>
      {list.map(({ node: post }: any) => (
        <ListGroupItem
          key={post.postId}
          tag={Link}
          to={`/wordpress/blog/${post.uri}`}
        >
          {post.title}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default PostListWidgetTemplate;
