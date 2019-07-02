import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RatingInterface from "../../interfaces/RatingInterface";

export interface SHRatingProps {
  rating: RatingInterface;
}

const SHRating: React.SFC<SHRatingProps> = ({ rating }) => {
  const { score, ReviewsCount } = rating;

  return (
    <p className="small text-muted mb-0">
      <span className="text-secondary">
        {score}
        <FontAwesomeIcon size="xs" icon="star" />
      </span>{" "}
      of {ReviewsCount} reviews
    </p>
  );
};

export default SHRating;
