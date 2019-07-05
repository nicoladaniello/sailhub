import * as React from "react";
import { Badge } from "reactstrap";
import { Link } from "react-router-dom";

export interface PostMetaProps {
  date: string;
  categories: any;
}

const PostMeta: React.SFC<PostMetaProps> = ({ date, categories }) => {
  return (
    <div className="post-meta">
      {categories.edges.map(({ node: category }: any) => (
        <Badge key={category.categoryId} color="light" className="badge-pill">
          <Link
            className="text-primary"
            to={`/wordpress/blog/category/${category.slug}`}
          >
            {category.name}
          </Link>
        </Badge>
      ))}
      <span className="posted-on">{new Date(date).toLocaleDateString()}</span>
    </div>
  );
};

export default PostMeta;
