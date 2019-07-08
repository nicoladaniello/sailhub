import React from "react";
import { ListGroup, ListGroupItem, Card, CardHeader } from "reactstrap";
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
    <Card className="mb-4">
      <CardHeader>{title}</CardHeader>
      <ListGroup flush>
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
    </Card>
  );
};

export default PostListWidgetTemplate;
