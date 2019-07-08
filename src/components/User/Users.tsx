import * as React from "react";
import Query from "../common/Query";
import { getUsers } from "./queries";

export interface UsersVariables {}

export interface UsersProps {
  variables?: UsersVariables;
}

const Users: React.SFC<UsersProps> = ({ variables, children }) => {
  const child = React.Children.only(children);
  if (!React.isValidElement(child))
    throw new Error("Category component expects a valid child element!");

  return (
    <Query query={getUsers} variables={variables}>
      {(data: any) => React.cloneElement(child, { users: data.users })}
    </Query>
  );
};

export default Users;
