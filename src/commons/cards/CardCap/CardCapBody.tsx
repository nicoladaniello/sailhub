import * as React from "react";
import { CardTitle, CardBody, CardText } from "reactstrap";
import SHRating from "../../../components/molecules/SHRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RatingInterface from "../../../interfaces/RatingInterface";

export interface CardCapBodyProps {
  title: string;
  description?: string;
  place?: string;
  rating?: RatingInterface;
}

const CardCapBody: React.SFC<CardCapBodyProps> = ({
  title,
  description,
  place,
  rating
}) => {
  return (
    <CardBody className="px-0 pt-2">
      <CardTitle className="mb-0 font-weight-bold">{title}</CardTitle>
      {description && <CardText className="small">{description}</CardText>}
      {rating && <SHRating rating={rating} />}
      {place && (
        <CardText className="mt-2 small text-muted">
          <FontAwesomeIcon className="mr-1" icon="map-marker-alt" />
          {place}
        </CardText>
      )}
    </CardBody>
  );
};

export default CardCapBody;
