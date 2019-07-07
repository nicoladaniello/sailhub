import * as React from "react";
import CategoriesTemplate from "./template";
import Categories from "../../Categories";

export interface CategoriesWidgetProps {}

const CategoriesWidget: React.SFC<CategoriesWidgetProps> = () => {
  return (
    <Categories>
      <CategoriesTemplate />
    </Categories>
  );
};

export default CategoriesWidget;
