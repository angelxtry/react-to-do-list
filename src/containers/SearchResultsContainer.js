import React from "react";
import { connect } from "react-redux";

import * as actions from "../store/module/todoList";
import SearchResults from "../components/SearchResults";
import uuid from "../utils/uuid";

const SearchResultsContainer = props => {
  // console.log("MainContainer: ", props);
  return <SearchResults searchResultsContainer={props} />;
};

const mapStateToProps = state => ({
  searchText: state.todoList.searchText,
  selectedCategoryId: state.todoList.selectedCategoryId,
  categories: state.todoList.categories,
  searchResults: state.todoList.searchResults
});

const mapDispatchToProps = dispatch => ({
  handleAddTodo: categoryId => dispatch(actions.addTodo(categoryId, uuid())),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsContainer);
