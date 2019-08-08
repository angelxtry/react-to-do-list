import React from "react";

import SearchResultEntityContainer from "../containers/SearchResultEntityContainer";

const SearchResults = ({ searchResultsContainer }) => {
  const { searchText, searchResults } = searchResultsContainer;
  return (
    <div>
      <span className="selected-category-name">
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
