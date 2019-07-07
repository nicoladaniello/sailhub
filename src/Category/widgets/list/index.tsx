import * as React from "react";
import Categories, { CategoriesVariables } from "../../Categories";
import CategoryListWidgetTemplate from "./template";

export interface CategoryListWidgetProps {
  title: string;
  variables?: CategoriesVariables;
}

const CategoryListWidget: React.SFC<CategoryListWidgetProps> = ({
  title,
  variables
}) => {
  return (
    <Categories variables={variables}>
      <CategoryListWidgetTemplate title={title} />
    </Categories>
  );
};

export default CategoryListWidget;
