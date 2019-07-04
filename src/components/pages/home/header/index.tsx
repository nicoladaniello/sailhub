import * as React from "react";
import { Query, QueryResult } from "react-apollo";
import HomeHeaderTemplate from "./template";
import { getGeneralSettings } from "../queries";

export interface HomeHeaderProps {}

const HomeHeader: React.SFC<HomeHeaderProps> = () => {
  return (
    <Query query={getGeneralSettings}>
      {({ data, loading, error }: QueryResult) => {
        if (error) console.log(error);
        if (error) return <div>error!</div>;
        if (loading) return <div>loading...</div>;
        if (!data) return <div>Nothing here...</div>;

        const { generalSettings } = data;
        console.log(generalSettings);
        return <HomeHeaderTemplate data={generalSettings} />;
      }}
    </Query>
  );
};

export default HomeHeader;
