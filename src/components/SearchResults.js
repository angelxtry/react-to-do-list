import React from "react";

import SearchResultEntityContainer from "../containers/SearchResultEntityContainer";

const SearchResults = props => {
  console.log("SearchResults: ", props);
  const { searchText, searchResults } = props.searchResultsContainer;
  const style = {
    fontSize: "50px",
    fontWeight: "900"
  };
  console.log("SearchRedults searchResults: ", searchResults);
  return (
    <div>
      <span className="selected-category-name" style={style}>
        {`'${searchText}'에 대한 검색 결과`}
      </span>
      {searchResults.map(searchResult => (
        <SearchResultEntityContainer
          key={searchResult.id}
          searchResult={searchResult}
        />
      ))}
    </div>
  );
};

export default SearchResults;
