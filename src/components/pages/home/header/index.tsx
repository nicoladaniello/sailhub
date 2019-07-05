import * as React from "react";
import Query from "../../../common/Query";
import HomeHeaderTemplate from "./template";
import { getGeneralSettings } from "../queries";

export interface HomeHeaderProps {}

const HomeHeader: React.SFC<HomeHeaderProps> = () => {
  return (
    <Query query={getGeneralSettings}>
      <HomeHeaderTemplate />
    </Query>
  );
};

export default HomeHeader;
