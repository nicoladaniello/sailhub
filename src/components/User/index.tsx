import * as React from "react";
import Query from "../common/Query";
import { getUser } from "./queries";

export interface UserVariables {
  nicename: string;
}

export interface UserProps {
  variables: UserVariables;
}

const User: React.SFC<UserProps> = ({ variables, children }) => {
  const child = React.Children.only(children);
  if (!React.isValidElement(child))
    throw new Error("Category component expects a valid child element!");

  return (
    <Query query={getUser} variables={variables}>
      {(data: any) => {
        const { node: user } = data.users.edges[0];
        return React.cloneElement(child, { user });
      }}
    </Query>
  );
};

export default User;
