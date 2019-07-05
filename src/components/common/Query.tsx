import * as React from "react";
import {
  Query as ApolloQuery,
  OperationVariables,
  QueryResult
} from "react-apollo";
import { Alert, Spinner } from "reactstrap";
import { DocumentNode } from "graphql";

export interface QueryProps {
  query: DocumentNode;
  variables?: OperationVariables;
}

const Query: React.SFC<QueryProps> = ({ query, variables, children }) => {
  return (
    <ApolloQuery query={query} variables={variables}>
      {({ data, loading, error }: QueryResult) => {
        const child = React.Children.only(children);
        if (!React.isValidElement(child))
          throw new Error(
            "Error: Query requires a single valid element as child!"
          );
        if (error) {
          console.error(error);
          return <Alert color="danger">An error occurred!</Alert>;
        }
        if (loading) return <Spinner />;
        if (!data) return;
        return React.cloneElement(child, { queryResult: data });
      }}
    </ApolloQuery>
  );
};

export default Query;
