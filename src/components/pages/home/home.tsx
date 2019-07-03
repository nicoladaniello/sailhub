import * as React from "react";
import ExploreOptions from "./ExploreOptions";
import HomeHeader from "./HomeHeader";
import ActionParagraph from "../../molecules/ActionParagraph";
import SailCardInterface from "../../../interfaces/SailCardInterface";
import SailCardsData from "../../../data/SailCardsData";
import LeaderCardSection from "./LeaderCardSection";
import LineMarketingData from "../../../data/LineMarketingData";
import JumbotronInterface from "../../../interfaces/JumbotronInterface";
import OptionsMarketingData from "../../../data/OptionsMarketingData";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faStar,
  faStarHalf,
  faShip,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import PageSection from "../../molecules/PageSection";
import Posts from "../Posts/Posts";
import SectionHeading from "../../molecules/SectionHeading";
import PostService, { PostSchema } from "../../../services/api/PostService";
import CategoryService from "../../../services/api/CategoryService";
import ProductService, {
  ProductSchema
} from "../../../services/api/productService";
import ProductCardList from "../../organisms/ProductCardList";
import { Row, Col } from "reactstrap";
import BlogPostList from "../../../posts/BlogPost/list";

library.add(faMapMarkerAlt, faStar, faStarHalf, faShip, faCheck);

export interface HomePageProps {}

export interface HomePageState {
  tours: ProductSchema[];
  lineMarketing: JumbotronInterface[] | null;
  optionsMarketing: SailCardInterface[] | null;
  stickyPosts: PostSchema[];
}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  state = {
    tours: [],
    lineMarketing: null,
    optionsMarketing: null,
    stickyPosts: []
  };

  async componentDidMount() {
    const slug = "home-page";
    const { data: cats } = await new CategoryService().list({ slug });
    const { data: stickyPosts } = await new PostService().list({
      categories: [cats[0].id],
      sticky: true
    });

    const { data: tours } = await new ProductService().list();

    const sails = SailCardsData;
    const lineMarketing = LineMarketingData;
    const optionsMarketing = OptionsMarketingData;

    this.setState({
      tours,
      lineMarketing,
      optionsMarketing,
      stickyPosts
    });
  }

  render() {
    const { tours, lineMarketing, optionsMarketing, stickyPosts } = this.state;
    return (
      <div id="HomePage">
        <HomeHeader />

        {stickyPosts.map(post => (
          <PageSection>
            <Row className="justify-content-center">
              <Col md="8">
                <h3>{post.title.rendered}</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </Col>
            </Row>
          </PageSection>
        ))}

        <PageSection>
          <SectionHeading title="Recent Posts" />
          <BlogPostList />
        </PageSection>

        <PageSection>
          <SectionHeading title="Today's top boat excursions in La Maddalena" />
          <ProductCardList list={tours} />
        </PageSection>

        {/* <OperatorsShowcase
          title="Today's top boat excursions in La Maddalena"
          operators={tour}
        /> */}
        <LeaderCardSection list={lineMarketing} />
        <PageSection>
          <SectionHeading title="Guides to the top destinations near you" />
          <Posts category="destinations" />
        </PageSection>
        <ActionParagraph
          title="Sail with us"
          description="We offer the best sailing trips and excursions in Sardinia"
          button="Read now"
        />
        <ExploreOptions title="Sail to the beach" options={optionsMarketing} />
      </div>
    );
  }
}

export default HomePage;
