import React from "react";
import { connect } from "react-redux";

// import * as actions from "../store/module/todoList";
import SearchResultEntity from "../components/SearchResultEntity";
// import SearchResults from "../components/SearchResults";
// import uuid from "../utils/uuid";

const SearchResultEntityContainer = props => {
  console.log("SearchResultEntityContainer: ", props.searchResult);
  return (
    <SearchResultEntity searchResultEntityContainer={props.searchResult} />
  );
};

const mapStateToProps = state => ({
  searchText: state.todoList.searchText,
  // selectedCategoryId: state.todoList.selectedCategoryId,
  // categories: state.todoList.categories,
  searchResults: state.todoList.searchResults
});

// const mapDispatchToProps = dispatch => ({
//   handleAddTodo: categoryId => dispatch(actions.addTodo(categoryId, uuid())),
// });

export default connect(mapStateToProps)(SearchResultEntityContainer);
