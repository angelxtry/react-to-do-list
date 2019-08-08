import React from "react";

import TodoContainer from "../containers/TodoContainer";

const SearchResultEntity = ({ searchResultEntityContainer }) => {
  const { name, todos } = searchResultEntityContainer;
  return (
    <div className="search-category-name">
      {name}
      <ol>
        {todos.map(todo => (
          <TodoContainer key={todo.id} todoList={todo} />
        ))}
      </ol>
    </div>
  );
};

export default SearchResultEntity;
