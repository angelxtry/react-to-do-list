import React from "react";

import TodoListContainer from "../containers/TodoListContainer";
import SearchResultsContainer from "../containers/SearchResultsContainer";

const Main = ({ mainContainer }) => {
  if (
    mainContainer.searchText === "" ||
    mainContainer.searchText === undefined
  ) {
    // console.log('Main TodoListContainer')
    return <TodoListContainer />;
  } else {
    // console.log('Main SearchResultsContainer')
    return <SearchResultsContainer />;
  }
};

export default Main;
