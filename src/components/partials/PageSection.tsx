import React from "react";
import { Container } from "reactstrap";

export interface PageSectionProps {}

const PageSection: React.SFC<PageSectionProps> = ({ children }) => {
  return (
    <section className="page-section">
      <Container>{children}</Container>
    </section>
  );
};

export default PageSection;
