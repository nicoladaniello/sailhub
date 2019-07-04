import * as React from "react";
import HomeHeader from "./header";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faStar,
  faStarHalf,
  faShip,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import PageSection from "../../partials/PageSection";
import SectionHeading from "../../partials/SectionHeading";
import BlogPostList from "../../../BlogPost/list";

library.add(faMapMarkerAlt, faStar, faStarHalf, faShip, faCheck);

export interface HomePageProps {}

export interface HomePageState {}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  state = {};

  render() {
    return (
      <div id="HomePage">
        <HomeHeader />

        <PageSection>
          <SectionHeading title="Recent Posts" />
          <BlogPostList />
        </PageSection>
      </div>
    );
  }
}

export default HomePage;
