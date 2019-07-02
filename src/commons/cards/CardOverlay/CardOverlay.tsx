import React from "react";
import { Card } from "reactstrap";

export interface CardOverlayProps {
  img: string;
  size?: "md" | "lg";
}

export enum CardOverlaySizes {
  "md" = "card-overlay-md",
  "lg" = "card-overlay-lg"
}

const CardOverlay: React.SFC<CardOverlayProps> = ({ img, children, size }) => {
  if (!size) size = "md";

  return (
    <Card
      inverse
      className={"card-overlay " + CardOverlaySizes[size]}
      style={{ backgroundImage: `url(${img})` }}
    >
      {children}
    </Card>
  );
};

export default CardOverlay;
