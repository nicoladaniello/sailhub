import * as React from "react";
import { Card as BSCard, CardBody, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

export interface CardProps {
  title: string;
  uri: string;
  meta?: React.Component;
  img?: string;
}

const Card: React.SFC<CardProps> = ({ title, uri, meta, img, children }) => {
  return (
    <BSCard className="cardcap">
      {img && (
        <CardImg top className="cardcap-img-cover" src={img} alt={title} />
      )}
      <CardBody>
        {meta}
        <CardTitle>
          <Link to={`/wordpress/blog/${uri}`}>{title}</Link>
        </CardTitle>
        {children}
      </CardBody>
    </BSCard>
  );
};

export default Card;
