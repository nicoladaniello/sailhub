import React from "react";
import { Row, Col, Button } from "reactstrap";

export interface ActionParagraphProps {
  title: string;
  description: string;
  button: string;
}

const ActionParagraph: React.SFC<ActionParagraphProps> = ({
  title,
  description,
  button
}) => {
  return (
    <section>
      <Row className="justify-content-center py-5">
        <Col md="6 text-center">
          <h3>{title}</h3>
          <p className="my-4">{description}</p>
          <Button className="px-5" color="secondary">
            {button}
          </Button>
        </Col>
      </Row>
    </section>
  );
};

export default ActionParagraph;
