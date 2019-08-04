import React from "react";

import Category from "./Category";

const Sidebar = props => {
  console.log("Sidebar: ", props);
  const {
    categories,
    handleAddCategory,
    handleSelectCategory
  } = props.categoryList;
  return (
    <div>
      {categories.map(category => (
        <Category
          key={category.id}
          category={category}
          callback={handleSelectCategory}
        />
      ))}
      <button onClick={handleAddCategory}>목록 추가</button>
    </div>
  );
};

export default Sidebar;
