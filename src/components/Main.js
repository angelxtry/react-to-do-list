// searchText가 존재하면 searchResults
// 없으면 TodoList
import React from "react";

import TodoListContainer from "../containers/TodoListContainer";
import SearchResultsContainer from "../containers/SearchResultsContainer";

const Main = props => {
  console.log("Main: ", props);
  if (
    props.mainContainer.searchText === "" ||
    props.mainContainer.searchText === undefined
  ) {
    console.log('Main TodoListContainer')
    return <TodoListContainer />;
  } else {
    console.log('Main SearchResultsContainer')
    return <SearchResultsContainer />;
  }
};

export default Main;
