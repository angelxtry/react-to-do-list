import React from "react";

import TodoContainer from "../containers/TodoContainer";

const TodoList = props => {
  // console.log("TodoList: ", props);
  const { selectedCategoryId, categories, handleAddTodo } = props.mainContainer;
  const [selectedCategory] = categories.filter(
    category => category.id === selectedCategoryId
  );

  const addTodo = categoryId => {
    if (isLastTodoNameBlank(selectedCategory.todos)) {
      return null;
    }
    return handleAddTodo(categoryId);
  };

  return (
    <div>
      <span className="selected-category-name">
        {selectedCategory.name}
      </span>
      <button
        className="btn-add-todo"
        onClick={() => addTodo(selectedCategoryId)}
      >
        +
      </button>
      <ol>
        {selectedCategory.todos.map(todo => (
          <TodoContainer key={todo.id} todoList={todo} />
        ))}
      </ol>
    </div>
  );
};

const isLastTodoNameBlank = todos => {
  // 빈 목록이 들어오면 Blank가 아니다.
  if (todos.length === 0) {
    return false;
  }
  // name이 비어 있으면 blank
  if (todos[todos.length - 1].name === "") {
    return true;
  }
  return false;
};

export default TodoList;
