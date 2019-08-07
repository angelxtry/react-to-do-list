import React from "react";
import { connect } from "react-redux";

import * as actions from "../store/module/todoList";
import TodoList from "../components/TodoList";
import uuid from "../utils/uuid";

const TodoListContainer = props => {
  // console.log("MainContainer: ", props);
  return <TodoList mainContainer={props} />;
};

const mapStateToProps = state => ({
  // searchText: state.todoList.searchText,
  selectedCategoryId: state.todoList.selectedCategoryId,
  categories: state.todoList.categories
});

const mapDispatchToProps = dispatch => ({
  handleAddTodo: categoryId => dispatch(actions.addTodo(categoryId, uuid())),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);