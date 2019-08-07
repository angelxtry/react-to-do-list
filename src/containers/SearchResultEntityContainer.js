import React from "react";
import { connect } from "react-redux";

import SearchResultEntity from "../components/SearchResultEntity";

const SearchResultEntityContainer = props => {
  // console.log("SearchResultEntityContainer: ", props.searchResult);
  return (
    <SearchResultEntity searchResultEntityContainer={props.searchResult} />
  );
};

const mapStateToProps = state => ({
  searchResults: state.todoList.searchResults
});

export default connect(mapStateToProps)(SearchResultEntityContainer);
