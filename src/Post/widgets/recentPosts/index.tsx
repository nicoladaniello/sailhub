import * as React from "react";
import RecentPostsWidgetTemplate from "./template";
import Posts from "../../Posts";

export interface RecentPostsWidgetProps {}

const RecentPostsWidget: React.SFC<RecentPostsWidgetProps> = () => {
  return (
    <Posts variables={{ first: 5 }}>
      <RecentPostsWidgetTemplate />
    </Posts>
  );
};

export default RecentPostsWidget;
