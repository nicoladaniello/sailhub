import React from "react";
import { CardBody, CardTitle, CardText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface CardOverlayBodyProps {
  title: string;
  place: string;
}

const CardOverlayBody: React.SFC<CardOverlayBodyProps> = ({ title, place }) => {
  return (
    <CardBody>
      <CardTitle className="mb-1">{title}</CardTitle>
      <CardText className="small">
        <FontAwesomeIcon className="mr-2" icon="map-marker-alt" />
        {place}
      </CardText>
    </CardBody>
  );
};

export default CardOverlayBody;
