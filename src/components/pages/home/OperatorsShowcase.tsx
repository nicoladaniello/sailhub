import * as React from "react";
import SectionHeading from "../../molecules/SectionHeading";
import SailCardInterface from "../../../interfaces/SailCardInterface";
import PageSection from "../../molecules/PageSection";
import ProductCardList from "../../organisms/ProductCardList";

export interface OperatorsShowcaseProps {
  title: string;
  operators: SailCardInterface[] | null;
}

const OperatorsShowcase: React.SFC<OperatorsShowcaseProps> = ({
  title,
  operators
}) => {
  return (
    <PageSection>
      <SectionHeading title={title} />
      <ProductCardList list={operators} />
    </PageSection>
  );
};

export default OperatorsShowcase;
