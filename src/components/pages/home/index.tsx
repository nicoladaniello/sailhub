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
import PostCarouselWidget from "../../Post/widgets/carousel";

library.add(faMapMarkerAlt, faStar, faStarHalf, faShip, faCheck);

export interface HomePageProps {}

export interface HomePageState {}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  state = {};

  render() {
    return (
      <div id="HomePage">
        <HomeHeader />

        <PostCarouselWidget title="Destinations Posts" categoryId={18} />
      </div>
    );
  }
}

export default HomePage;
