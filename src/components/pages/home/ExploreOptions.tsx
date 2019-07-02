import * as React from "react";
import PageSection from "../../molecules/PageSection";
import SectionHeading from "../../molecules/SectionHeading";
import SailCardInterface from "../../../interfaces/SailCardInterface";
import ProductCardList from "../../organisms/ProductCardList";

export interface ExploreOptionsProps {
  title: string;
  options: SailCardInterface[] | null;
}

const ExploreOptions: React.SFC<ExploreOptionsProps> = ({ title, options }) => {
  return (
    <PageSection>
      <SectionHeading title={title} />
      <ProductCardList large list={options} />
    </PageSection>
  );
};

export default ExploreOptions;
