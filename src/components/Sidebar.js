import React, { Component } from "react";

import CategoryContainer from "../containers/CategoryContainer";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }
  onChangeSearchText = e => {
    // console.log(e.target.value);
    this.setState({
      searchText: e.target.value
    });
    this.props.categoryList.handleSearch(e.target.value);
  };

  onKeyDown = e => {
    if (e.keyCode === 27) {
      this.setState(function(prevState, props){
        return {searchText: ""};
      });
    }
    this.props.categoryList.handleSearch("");
  };

  render() {
    // console.log("Sidebar render: ", this.props.categoryList);
    const {
      categories,
      handleAddCategory
    } = this.props.categoryList;
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
          {categories.map((category, index) =>
            index === categories.length - 1 ? (
              <CategoryContainer
                key={category.id}
                category={category}
                focus={true}
              />
            ) : (
              <CategoryContainer
                key={category.id}
                category={category}
                focus={false}
              />
            )
          )}
        </ul>
        <button className="btn-add-category" onClick={handleAddCategory}>
          목록 추가
        </button>
      </div>
    );
  }
}

export default Sidebar;
