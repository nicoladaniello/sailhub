import * as React from "react";
import Post from "../../index";
import PostPageTemplate from "./template";

export interface PostPageProps {
  match: any;
}

const PostPage: React.SFC<PostPageProps> = ({ match }) => {
  const { uri } = match.params;
  return (
    <Post variables={{ uri }}>
      <PostPageTemplate />
    </Post>
  );
};

export default PostPage;
