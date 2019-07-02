import * as React from "react";
import { Row, Col } from "reactstrap";
import DestinationCard from "../molecules/DestinationCard";
import { PostSchema } from "../../services/api/PostService";

export interface DestinationCardListProps {
  list: PostSchema[] | null;
}

const DestinationCardList: React.SFC<DestinationCardListProps> = ({ list }) => {
  if (list === null || list.length < 1) return null;

  return (
    <Row className="no-gutters">
      {list.map((c, i) => (
        <Col
          key={i}
          className="p-1"
          md={i % 4 === 0 || (i + 1) % 4 === 0 ? "4" : "8"}
        >
          <DestinationCard
            name={c.title.rendered}
            image={c.jetpack_featured_media_url}
            place={"La Maddalena"}
          />
        </Col>
      ))}
    </Row>
  );
};

export default DestinationCardList;
