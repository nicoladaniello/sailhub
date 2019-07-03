import * as React from "react";
import PageHeader from "../../../components/PageHeader";
import HeroImg from "../../../../images/hero.jpg";

export interface HomeHeaderTemplateProps {
  data: any;
}

const HomeHeaderTemplate: React.SFC<HomeHeaderTemplateProps> = ({ data }) => {
  const { title, description } = data;
  return (
    <PageHeader img={HeroImg}>
      <div className="w-100 text-center text-white">
        <h1 className="display-3">{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </PageHeader>
  );
};

export default HomeHeaderTemplate;
