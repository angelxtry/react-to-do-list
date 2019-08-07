import React from "react";

import TodoContainer from "../containers/TodoContainer";

const SearchResultEntity = props => {
  const { name, todos } = props.searchResultEntityContainer;
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