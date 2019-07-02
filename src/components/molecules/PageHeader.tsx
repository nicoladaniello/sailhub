import React from "react";
import { Jumbotron, Container } from "reactstrap";

export interface PageHeaderProps {
  img?: string;
}

const PageHeader: React.SFC<PageHeaderProps> = ({ img, children }) => {
  const jumbotronStyle = img ? { backgroundImage: `url(${img})` } : undefined;
  return (
    <header>
      <Jumbotron fluid className="hero-img" style={jumbotronStyle}>
        <Container fluid className="d-flex h-100 align-items-center">
          {children}
        </Container>
      </Jumbotron>
    </header>
  );
};

export default PageHeader;
