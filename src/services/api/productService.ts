import ApiService from "./ApiService";
import { ApiParams } from "./types/ApiParams";

const resource = "wc-proxy/products";

export type ProductSchema = {
  id: string;
  name: string;
  description: string;
  short_description: string;
  price: number;
  images?: { src: string }[];
};
type ProductListAPIParams = ApiParams;
type ProductGetAPIParams = ApiParams;
type ProductCreateApiParams = ApiParams;
type ProductUpdateApiParams = ApiParams;

export default class ProductService extends ApiService<
  ProductSchema,
  ProductListAPIParams,
  ProductGetAPIParams,
  ProductCreateApiParams,
  ProductUpdateApiParams
> {
  constructor() {
    super(resource);
  }
}
