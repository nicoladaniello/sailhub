import React from "react";
import PageSection from "../../molecules/PageSection";
import PostService, { PostSchema } from "../../../services/api/PostService";
import { PostListAPIParams } from "../../../services/api/types/PostListAPIParams";
import CategoryService from "../../../services/api/CategoryService";
import DestinationCardList from "../../organisms/DestinationCardList";
import SectionHeading from "../../molecules/SectionHeading";

export interface PostsProps extends PostListAPIParams {
  category?: string;
}

export interface PostsState {
  posts: PostSchema[];
}

class Posts extends React.Component<PostsProps, PostsState> {
  state: PostsState = {
    posts: []
  };

  async componentWillMount() {
    const { category } = this.props;
    const postSvc = new PostService();
    const params: PostListAPIParams = {};

    if (category) {
      const catId = await this._getCategoryIdFromSlug(category);
      params.categories = [catId];
    }

    const { data: posts } = await postSvc.list(params);
    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;
    if (!posts || posts.length < 1) return null;

    return <DestinationCardList list={posts} />;
  }

  async _getCategoryIdFromSlug(slug: string): Promise<string> {
    const { data: categories } = await new CategoryService().list({ slug });
    return categories[0].id;
  }
}

export default Posts;
