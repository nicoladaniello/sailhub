import React from "react";
import { Card, CardImg } from "reactstrap";

export interface CardCapProps {
  img: string;
  caption: string;
}

const CardCap: React.SFC<CardCapProps> = ({ img, caption, children }) => {
  return (
    <Card className="cardcap">
      <CardImg top className="cardcap-img-cover" src={img} alt={caption} />
      {children}
    </Card>
  );
};

export default CardCap;
