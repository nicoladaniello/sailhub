import React from "react";
import PageHeader from "../../../partials/PageHeader";
import HeroImg from "../../../../images/hero.jpg";

export interface HomeHeaderTemplateProps {
  queryResult?: any;
}

const HomeHeaderTemplate: React.SFC<HomeHeaderTemplateProps> = ({
  queryResult
}) => {
  const { title, description } = queryResult.generalSettings;
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
