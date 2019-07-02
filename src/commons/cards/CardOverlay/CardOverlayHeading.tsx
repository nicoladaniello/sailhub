import React from "react";
import { Button } from "reactstrap";

export interface CardOverlayHeadingProps {
  title: string;
  description: string;
  button: string;
}

const CardOverlayHeading: React.SFC<CardOverlayHeadingProps> = ({
  title,
  description,
  button
}) => {
  return (
    <div className="card-overlay-heading">
      <div className="text-center text-white">
        <h3 className="font-weight-bold">{title}</h3>
        <p className="small">{description}</p>
        <p>
          <Button color="secondary">{button}</Button>
        </p>
      </div>
    </div>
  );
};

export default CardOverlayHeading;
