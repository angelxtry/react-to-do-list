import React from "react";

import Todo from "./Todo";

const Main = props => {
  // console.log("Main: ", props);
  const { selectedCategoryId, categories, handleToggleCheck } = props.todos;
  console.log("Main selectedCategoryId: ", selectedCategoryId);
  console.log("Main categories: ", categories);
  const [selectedCategory] = categories.filter(
    category => category.id === selectedCategoryId
  );
  console.log('Main selectedCategory: ', selectedCategory);
  return (
    <div>
      <h2>{selectedCategory.name}</h2>
      {selectedCategory.todos.map(todo => (
        <Todo key={todo.id} todo={todo} callback={handleToggleCheck} />
      ))}
      {/* <button onClick={handleAddCategory}>목록 추가</button> */}
    </div>
  );
};

export default Main;
