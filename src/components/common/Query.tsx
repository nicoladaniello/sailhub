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
        if (error)
          return <Alert color="danger">Sorry, {error.message} occured</Alert>;
        if (loading) return <Spinner />;
        if (!data) return <Alert color="warning">Data is empty.</Alert>;

        if (!(typeof children === "function"))
          throw new Error("Query expects a function as a child!");

        // return null;
        return children(data);
      }}
    </ApolloQuery>
  );
};

export default Query;
