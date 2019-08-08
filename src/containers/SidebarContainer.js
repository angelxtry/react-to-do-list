import React from "react";
import { connect } from "react-redux";

import * as actions from "../store/module/todoList";
import Sidebar from "../components/Sidebar";
import uuid from "../utils/uuid";

const SidebarContainer = props => {
  // console.log("SidebarContainer: ", props);
  return <Sidebar categoryList={props} />;
};

const mapStateToProps = state => ({
  searchText: state.todoList.searchText,
  categories: state.todoList.categories,
  searchResults: state.todoList.searchResults
});

const mapDispatchToProps = dispatch => ({
  handleAddCategory: () => dispatch(actions.addCategory(uuid())),
  handleSearch: searchText =>
    dispatch(actions.searchCategoryAndTodo(searchText))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
