import React from "react";

import CategoryContainer from "../containers/CategoryContainer";

const Sidebar = props => {
  // console.log("Sidebar: ", props);
  const { categories, handleAddCategory } = props.categoryList;
  return (
    <div>
      <ul>
        {categories.map(category => (
          <CategoryContainer key={category.id} category={category} />
        ))}
      </ul>
      <button onClick={handleAddCategory}>목록 추가</button>
    </div>
  );
};

export default Sidebar;
