import React from "react";
import { connect } from "react-redux";

import * as actions from "../store/module/todoList";
import Todo from "../components/Todo";

const TodoContainer = props => {
  // console.log("TodoContainer: ", props);
  return <Todo todoContainer={props} />;
};

const mapStateToProps = state => ({
  selectedCategoryId: state.todoList.selectedCategoryId,
  categories: state.todoList.categories
});

const mapDispatchToProps = dispatch => ({
  handleToggleCheckbox: (categoryId, id) =>
    dispatch(actions.toggleComplete(categoryId, id)),
  handleChangeTodoText: (categoryId, id, text) =>
    dispatch(actions.changeTodoText(categoryId, id, text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
