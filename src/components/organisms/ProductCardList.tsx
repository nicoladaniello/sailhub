import React from "react";
import { Row, Col } from "reactstrap";
import ProductCard from "../molecules/ProductCard";
import { ProductSchema } from "../../services/api/productService";

export interface ProductCardListProps {
  list: ProductSchema[] | null;
  large?: boolean;
}

const ProductCardList: React.SFC<ProductCardListProps> = ({ list, large }) => {
  if (list === null) return null;
  console.log(list);

  const colSizeProps = large
    ? {
        md: "3",
        sm: "4"
      }
    : {
        md: "2",
        sm: "3"
      };

  return (
    <Row className="no-gutters">
      {list.map((c, i) => (
        <Col key={i} className="p-1" {...colSizeProps}>
          <ProductCard
            title={c.name}
            description={c.short_description}
            img={c.images ? c.images[0].src : ""}
            place={"La Maddalena"}
            // rating={c.rating}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ProductCardList;
