import ApiService from "./ApiService";
import { ApiParams } from "./types/ApiParams";

const resource = "wp/v2/categories";

export type CategorySchema = {
  id: string;
};
type CategoryListAPIParams = ApiParams;
type CategoryGetAPIParams = ApiParams;
type CategoryCreateApiParams = ApiParams;
type CategoryUpdateApiParams = ApiParams;

export default class CategoryService extends ApiService<
  CategorySchema,
  CategoryListAPIParams,
  CategoryGetAPIParams,
  CategoryCreateApiParams,
  CategoryUpdateApiParams
> {
  constructor() {
    super(resource);
  }
}
