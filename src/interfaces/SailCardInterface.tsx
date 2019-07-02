import RatingInterface from "./RatingInterface";

export default interface SailCardInterface {
  title: string;
  description?: string;
  img: string;
  place?: string;
  rating?: RatingInterface;
}
