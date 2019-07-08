import * as React from "react";
import User from "../..";
import UserPageTemplate from "./template";

export interface UsersPageProps {
  match?: any;
}

const UsersPage: React.SFC<UsersPageProps> = ({ match }) => {
  const { nicename } = match.params;
  return (
    <User variables={{ nicename }}>
      <UserPageTemplate />
    </User>
  );
};

export default UsersPage;
