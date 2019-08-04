import React from "react";

const Category = props => {
  // console.log("Category: ", props);
  const { category, callback } = props;
  return (
    <li>
      <input
        className="category"
        placeholder={category.name}
        onClick={() => callback(category.id)}
      />
    </li>
  );
};

export default Category;
