import React from "react";
import CardOverlay from "../../commons/cards/CardOverlay/CardOverlay";
import CardOverlayBody from "../../commons/cards/CardOverlay/CardOverlayBody";
import DestinationEmbed from "../../interfaces/DestinationEmbed";

export interface DestinationCardProps extends DestinationEmbed {}

const DestinationCard: React.SFC<DestinationCardProps> = ({
  name,
  image,
  place
}) => {
  return (
    <CardOverlay img={image} size="md">
      <CardOverlayBody title={name} place={place} />
    </CardOverlay>
  );
};

export default DestinationCard;
