import * as React from "react";
import Query from "../../../components/common/Query";
import { getPostTitleList } from "../../queries";
import RecentPostsWidgetTemplate from "./template";

export interface RecentPostsWidgetProps {}

const RecentPostsWidget: React.SFC<RecentPostsWidgetProps> = () => {
  return (
    <Query query={getPostTitleList} variables={{ first: 5 }}>
      <RecentPostsWidgetTemplate />
    </Query>
  );
};

export default RecentPostsWidget;
