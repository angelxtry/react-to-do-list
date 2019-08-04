import React from "react";
import { connect } from "react-redux";

import * as actions from "../store/module/todoList";
import Sidebar from "../components/Sidebar";
import uuid from "../utils/uuid";

const SidebarContainer = props => {
  console.log("SidebarContainer: ", props);
  return <Sidebar categoryList={props} />;
};

const mapStateToProps = state => ({
  // selectedCategoryId: state.todoList.selectedCategoryId,
  categories: state.todoList.categories
});

const mapDispatchToProps = dispatch => ({
  handleAddCategory: () => dispatch(actions.addCategory(uuid())),
  handleDelCategory: id => dispatch(actions.delCategory(id)),
  handleSelectCategory: id => dispatch(actions.selectCategory(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
