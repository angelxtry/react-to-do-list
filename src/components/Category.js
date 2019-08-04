import React from "react";

const Category = props => {
  console.log('Category: ', props)
  const { category, callback } = props;
  return (
    <ul>
      <li>
        <input className="category" placeholder={category.name} 
        onClick={() => callback(category.id)}/>
      </li>
    </ul>
  );
};

export default Category;
