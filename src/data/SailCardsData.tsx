import SailCardInterface from "../interfaces/SailCardInterface";
import PostImg1 from "../img/post1-600.jpg";
import PostImg2 from "../img/post2-600.jpg";
import PostImg3 from "../img/post3-600.jpg";
import PostImg4 from "../img/post4-600.jpg";
import PostImg5 from "../img/post5-600.jpg";
import PostImg6 from "../img/post6-600.jpg";

const SailCardsData: SailCardInterface[] = [
  {
    title: "Giro alle isole con la Marinella",
    place: "La Maddalena, Sardinia",
    img: PostImg1,
    rating: {
      score: 5,
      ReviewsCount: 100
    }
  },
  {
    title: "Banana Boat private tour for the archipelago",
    place: "La Maddalena, Sardinia",
    img: PostImg2,
    rating: {
      score: 5,
      ReviewsCount: 100
    }
  },
  {
    title: "Giro alle isole con la Marinella",
    place: "La Maddalena, Sardinia",
    img: PostImg3,
    rating: {
      score: 4.7,
      ReviewsCount: 100
    }
  },
  {
    title: "Banana Boat private tour for the archipelago",
    place: "La Maddalena, Sardinia",
    img: PostImg4,
    rating: {
      score: 5,
      ReviewsCount: 100
    }
  },
  {
    title: "Banana Boat private tour for the archipelago",
    place: "La Maddalena, Sardinia",
    img: PostImg5,
    rating: {
      score: 4.5,
      ReviewsCount: 100
    }
  },
  {
    title: "Banana Boat private tour for the archipelago",
    place: "La Maddalena, Sardinia",
    img: PostImg6,
    rating: {
      score: 5,
      ReviewsCount: 100
    }
  }
];

export default SailCardsData;
