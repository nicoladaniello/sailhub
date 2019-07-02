import React from "react";
import HeroImg from "../../../img/hero.jpg";
import PageHeader from "../../molecules/PageHeader";

export interface HomeHeaderProps {}

const HomeHeader: React.SFC<HomeHeaderProps> = () => {
  return (
    <PageHeader img={HeroImg}>
      <div className="w-100 text-center text-white">
        <h1 className="display-3">Welcome to your new home</h1>
        <p className="lead">
          Welcome to the summer of your life in the most beautiful island of the
          mediterranean
        </p>
      </div>
    </PageHeader>
  );
};

export default HomeHeader;
