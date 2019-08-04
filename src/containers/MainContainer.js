import React from "react";
import { connect } from "react-redux";

import uuid from "../utils/uuid";
import * as actions from "../store/module/todoList";
import Main from "../components/Main";

const MainContainer = props => {
  // console.log("MainContainer: ", props);
  return <Main mainContainer={props} />;
};

const mapStateToProps = state => ({
  selectedCategoryId: state.todoList.selectedCategoryId,
  categories: state.todoList.categories
});

const mapDispatchToProps = dispatch => ({
  handleAddTodo: categoryId => dispatch(actions.addTodo(categoryId, uuid())),
  handleToggleCheckbox: (categoryId, id) =>
    dispatch(actions.toggleComplete(categoryId, id)),
  handleChangeTodoText: (categoryId, id, text) =>
    dispatch(actions.changeTodoText(categoryId, id, text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
