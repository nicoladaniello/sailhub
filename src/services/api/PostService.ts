import ApiService from "./ApiService";
import { ApiParams } from "./types/ApiParams";
import { PostListAPIParams } from "./types/PostListAPIParams";

const resource = "wp/v2/posts";

export type PostSchema = {
  id: string;
  title: {
    rendered: string;
  };
  jetpack_featured_media_url: string;
};
type PostGetAPIParams = ApiParams;
type PostCreateApiParams = ApiParams;
type PostUpdateApiParams = ApiParams;

export default class PostService extends ApiService<
  PostSchema,
  PostListAPIParams,
  PostGetAPIParams,
  PostCreateApiParams,
  PostUpdateApiParams
> {
  constructor() {
    super(resource);
  }
}
