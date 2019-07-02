import React from "react";
import CardOverlay from "../../commons/cards/CardOverlay/CardOverlay";
import CardOverlayHeading from "../../commons/cards/CardOverlay/CardOverlayHeading";

export interface LeaderCardProps {
  title: string;
  description: string;
  img: string;
  button: string;
}

const LeaderCard: React.SFC<LeaderCardProps> = ({
  title,
  description,
  img,
  button
}) => {
  return (
    <CardOverlay img={img} size="lg">
      <CardOverlayHeading
        title={title}
        description={description}
        button={button}
      />
    </CardOverlay>
  );
};

export default LeaderCard;
