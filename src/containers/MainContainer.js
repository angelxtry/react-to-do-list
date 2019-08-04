import React from "react";
import { connect } from "react-redux";

import uuid from "../utils/uuid";
import {
  addTodo,
  changeTodoText,
  toggleComplete
} from "../store/module/todoList";
import Main from "../components/Main";

const MainContainer = props => {
  // console.log("MainContainer: ", props);
  return <Main todos={props} />;
};

const mapStateToProps = state => ({
  selectedCategoryId: state.todoList.selectedCategoryId,
  categories: state.todoList.categories
});

const mapDispatchToProps = dispatch => ({
  handleAddTodo: categoryId => dispatch(addTodo(categoryId, uuid())),
  handleToggleCheckbox: (categoryId, id) =>
    dispatch(toggleComplete(categoryId, id)),
  handleChangeTodoText: (categoryId, id, text) =>
    dispatch(changeTodoText(categoryId, id, text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
