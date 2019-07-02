import OperatorInterface from "./OperatorInterface";

export default interface TourInterface {
  operator: OperatorInterface;
  title: string;
  images: string[];
  // details: TourDetailsInterface;
  // itinerary: TourItineraryInterface;
  // reviews: TourReviewsInterface;
}
