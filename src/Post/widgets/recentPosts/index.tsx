import * as React from "react";
import { Query, QueryResult } from "react-apollo";
import { getPostTitleList } from "../../queries";
import RecentPostsWidgetTemplate from "./template";

export interface RecentPostsWidgetProps {}

const RecentPostsWidget: React.SFC<RecentPostsWidgetProps> = () => {
  return (
    <Query query={getPostTitleList} variables={{ first: 5 }}>
      {({ data, loading, error }: QueryResult) => {
        if (error) console.log(error);
        if (error) return <div>error!</div>;
        if (loading) return <div>loading...</div>;
        if (!data) return <div>Nothing here...</div>;

        const { edges: recentPosts } = data.posts;
        console.log(recentPosts);
        return <RecentPostsWidgetTemplate list={recentPosts} />;
      }}
    </Query>
  );
};

export default RecentPostsWidget;
