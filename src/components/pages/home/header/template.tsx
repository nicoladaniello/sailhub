import React from "react";
import PageHeader from "../../../partials/PageHeader";
import HeroImg from "../../../../images/hero.jpg";
import { Alert } from "reactstrap";

export interface HomeHeaderTemplateProps {
  generalSettings: any;
}

const HomeHeaderTemplate: React.SFC<HomeHeaderTemplateProps> = ({
  generalSettings
}) => {
  if (!generalSettings)
    return <Alert color="warning">Could't load general settings.</Alert>;
  const { title, description } = generalSettings;
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
