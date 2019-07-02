import * as React from "react";
import CardCap from "../../commons/cards/CardCap/CardCap";
import CardCapBody from "../../commons/cards/CardCap/CardCapBody";
import RatingInterface from "../../interfaces/RatingInterface";

export interface ProductCardProps {
  title: string;
  description?: string;
  img: string;
  place?: string;
  rating?: RatingInterface;
}

const ProductCard: React.SFC<ProductCardProps> = ({
  title,
  description,
  img,
  place,
  rating
}) => {
  return (
    <CardCap img={img} caption={title}>
      <CardCapBody
        title={title}
        description={description}
        place={place}
        rating={rating}
      />
    </CardCap>
  );
};

export default ProductCard;
