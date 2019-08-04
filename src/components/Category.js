import React from "react";

const Category = props => {
  // console.log("Category: ", props);
  const { category, callback, callbackDelCategory } = props;
  const onDelCategory = () => {
    if (category.id === '00001') {
      alert('미리알림은 지우면 안되요.')
      return null;
    }
    callback('00001');
    callbackDelCategory(category.id);
  }
  return (
    <li>
      <span>
        <input
          className="category"
          placeholder={category.name}
          onClick={() => callback(category.id)}
        />
      </span>
      <button onClick={onDelCategory}>삭제</button>
    </li>
  );
};

export default Category;
