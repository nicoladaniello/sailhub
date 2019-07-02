import * as React from "react";
import ProductService, {
  ProductSchema
} from "../../../services/api/productService";
import { Row, Col } from "reactstrap";
import ProductCard from "../../molecules/ProductCard";

export interface ProductsProps {}

export interface ProductsState {
  products: ProductSchema[];
}

class Products extends React.Component<ProductsProps, ProductsState> {
  state = { products: [] };

  async componentWillMount() {
    const productSvc = new ProductService();
    const { data: products } = await productSvc.list();
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    if (!products || products.length < 1) return <p>Not found...</p>;

    return (
      <Row className="no-gutters">
        {products.map((p, i) => (
          <Col key={i} className="p-1" md="3">
            <ProductCard
              title={p.name}
              description={p.short_description}
              img={p.images[0].src}
              place={p.price}
            />
          </Col>
        ))}
      </Row>
    );
  }
}

export default Products;
