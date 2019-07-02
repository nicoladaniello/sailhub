import { ApiParams } from "./ApiParams";

export interface PostListAPIParams extends ApiParams {
  context?: "view" | "embed" | "edit";
  page?: number;
  per_page?: number;
  search?: string;
  after?: Date;
  author?: string[];
  author_exclude?: string[];
  before?: Date;
  exclude?: string[];
  include?: string[];
  offset?: number;
  order?: "desc" | "asc";
  orderby?:
    | "author"
    | "date"
    | "id"
    | "include"
    | "modified"
    | "parent"
    | "relevance"
    | "slug"
    | "title";
  slug?: string;
  status?: string;
  categories?: string[];
  categories_exclude?: string[];
  tags?: string[];
  tags_exclude?: string[];
  sticky?: boolean;
}
