import React from "react";
import { connect } from "react-redux";

import * as actions from "../store/module/todoList";
import Category from "../components/Category";

const CategoryContainer = props => {
  return <Category categoryContainer={props} />;
};

const mapStateToProps = state => ({
  categories: state.todoList.categories
});

const mapDispatchToProps = dispatch => ({
  handleDelCategory: id => dispatch(actions.delCategory(id)),
  handleSelectCategory: id => dispatch(actions.selectCategory(id)),
  handleChangeCategoryText: (id, text) =>
    dispatch(actions.changeCategoryText(id, text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryContainer);
