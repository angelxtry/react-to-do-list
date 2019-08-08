import React from "react";
import { connect } from "react-redux";

import SearchResults from "../components/SearchResults";

const SearchResultsContainer = props => {
  // console.log("MainContainer: ", props);
  return <SearchResults searchResultsContainer={props} />;
};

const mapStateToProps = state => ({
  searchText: state.todoList.searchText,
  searchResults: state.todoList.searchResults
});

export default connect(mapStateToProps)(SearchResultsContainer);
