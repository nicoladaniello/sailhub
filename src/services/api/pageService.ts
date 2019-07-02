import ApiService from "./ApiService";
import { ApiParams } from "./types/ApiParams";

const resource = "wp/v3/pages";

type PageSchema = any;
type PageListAPIParams = ApiParams;
type PageGetAPIParams = ApiParams;
type PageCreateApiParams = ApiParams;
type PageUpdateApiParams = ApiParams;

export default class PageService extends ApiService<
  PageSchema,
  PageListAPIParams,
  PageGetAPIParams,
  PageCreateApiParams,
  PageUpdateApiParams
> {
  constructor() {
    super(resource);
  }
}
