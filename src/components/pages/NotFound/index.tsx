import * as React from "react";
import { Location } from "history";

export interface NotFoundProps {
  location: Location<any>;
}

const NotFound: React.SFC<NotFoundProps> = props => {
  return <p>Not Found!</p>;
};

export default NotFound;
