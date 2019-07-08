import * as React from "react";
import Tag from "../..";
import TagPageTemplate from "./template";

export interface TagPageProps {
  match: any;
}

const TagPage: React.SFC<TagPageProps> = ({ match }) => {
  const { slug } = match.params;
  return (
    <Tag variables={{ slug: [slug] }}>
      <TagPageTemplate />
    </Tag>
  );
};

export default TagPage;
