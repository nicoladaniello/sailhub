import * as React from "react";
import Tags, { TagsVariables } from "../../Tags";
import TagListTemplate from "./template";

export interface TagListProps {
  title: string;
  variables?: TagsVariables;
}

const TagList: React.SFC<TagListProps> = ({ title, variables }) => {
  return (
    <Tags variables={variables}>
      <TagListTemplate title={title} />
    </Tags>
  );
};

export default TagList;
