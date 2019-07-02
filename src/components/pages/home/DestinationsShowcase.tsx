import * as React from "react";
import DestinationCardInterface from "../../../interfaces/DestinationCardInterface";
import SectionHeading from "../../molecules/SectionHeading";
import DestinationCardList from "../../organisms/DestinationCardList";
import PageSection from "../../molecules/PageSection";

export interface DestinationsShowcaseProps {
  title: string;
  destinations: DestinationCardInterface[] | null;
}

const DestinationsShowcase: React.SFC<DestinationsShowcaseProps> = ({
  title,
  destinations
}) => {
  return (
    <PageSection>
      <SectionHeading title={title} />
      <DestinationCardList list={destinations} />
    </PageSection>
  );
};

export default DestinationsShowcase;
