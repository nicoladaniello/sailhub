import * as React from "react";

export interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.SFC<SectionHeadingProps> = ({ title }) => {
  return (
    <div className="section-heading ml-2">
      <h5 className="font-weight-bold mb-3">{title}</h5>
    </div>
  );
};

export default SectionHeading;
