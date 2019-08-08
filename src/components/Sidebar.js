import React, { Component } from "react";

import CategoryContainer from "../containers/CategoryContainer";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  resetSearchText = () => {
    this.setState({
      searchText: ""
    });
  };

  onChangeSearchText = e => {
    // console.log(e.target.value);
    this.setState({
      searchText: e.target.value
    });
    this.props.categoryList.handleSearch(e.target.value);
  };

  onKeyDown = e => {
    if (e.keyCode === 27) {
      this.setState(function(prevState, props) {
        return { searchText: "" };
      });
    }
    this.props.categoryList.handleSearch("");
  };

  render() {
    const { categories, handleAddCategory } = this.props.categoryList;
    // console.log("Sidebar render categories: ", categories);
    return (
      <div>
        <div>
          <input
            className="input-search"
            value={this.state.searchText}
            onChange={e => this.onChangeSearchText(e)}
            onKeyDown={this.onKeyDown}
          />
        </div>
        <ul>
          {categories.map((category, index) => (
            <CategoryContainer
              key={category.id}
              category={category}
              isNew={category.isNew}
              callbackResetSearchText={this.resetSearchText}
            />
          ))}
        </ul>
        <button className="btn-add-category" onClick={handleAddCategory}>
          목록 추가
        </button>
      </div>
    );
  }
}

export default Sidebar;
