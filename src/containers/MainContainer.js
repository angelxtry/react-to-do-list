import React from "react";
import { connect } from "react-redux";

import uuid from "../utils/uuid";
import { addTodo, toggleComplete } from "../store/module/todoList";
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
  handleAddTodo: () => dispatch(addTodo(uuid())),
  handleToggleCheck: id => dispatch(toggleComplete(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
