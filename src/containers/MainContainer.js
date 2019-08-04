import React from "react";
import { connect } from "react-redux";

import * as actions from "../store/module/todoList";
import Main from "../components/Main";
import uuid from "../utils/uuid";

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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
