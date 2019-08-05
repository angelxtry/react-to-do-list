import React from "react";

import CategoryContainer from "../containers/CategoryContainer";

const Sidebar = props => {
  // console.log("Sidebar: ", props);
  const { categories, handleAddCategory } = props.categoryList;
  return (
    <div>
      <ul>
        {categories.map((category, index) =>
          index === categories.length - 1 ? (
            <CategoryContainer
              key={category.id}
              category={category}
              focus={true}
            />
          ) : (
            <CategoryContainer
              key={category.id}
              category={category}
              focus={false}
            />
          )
        )}
      </ul>
      <button className="btn-add-category" onClick={handleAddCategory}>
        목록 추가
      </button>
    </div>
  );
};

export default Sidebar;
