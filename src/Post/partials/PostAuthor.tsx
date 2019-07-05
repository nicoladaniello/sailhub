import * as React from "react";
import { Media } from "reactstrap";

export interface PostAuthorProps {
  author: any;
}

const PostAuthor: React.SFC<PostAuthorProps> = ({ author }) => {
  return (
    <Media>
      <Media left href="/">
        <Media object data-src="holder.js/64x64" alt={author.name} />
      </Media>
      <Media body>
        <h6 className="text-muted">Posted By:</h6>
        <Media heading>{author.name}</Media>
      </Media>
    </Media>
  );
};

export default PostAuthor;
