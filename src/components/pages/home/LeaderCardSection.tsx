import * as React from "react";
import { Container, Row, Col } from "reactstrap";
import JumbotronInterface from "../../../interfaces/JumbotronInterface";
import LeaderCard from "../../molecules/LeaderCard";

export interface LeaderCardSectionProps {
  list: JumbotronInterface[] | null;
}

const LeaderCardSection: React.SFC<LeaderCardSectionProps> = ({ list }) => {
  if (list === null) return null;

  const colProps = list.length > 1 ? { md: 6, sm: 12 } : { md: 12 };

  return (
    <section>
      <Container>
        <Row>
          {list.map((j, i) => (
            <Col key={i} {...colProps}>
              <LeaderCard
                title={j.title}
                description={j.description}
                img={j.img}
                button={j.button}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LeaderCardSection;
