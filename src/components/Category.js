import React, { Component } from "react";

const DEFAULT_CATEGORY_ID = "00001";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryText: ""
    };
    // console.log('Category: ', props);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      categoryText: this.props.categoryContainer.category.name
    });
  }

  onDelCategory = () => {
    const {
      category,
      handleDelCategory,
      handleSelectCategory
    } = this.props.categoryContainer;
    if (category.id === DEFAULT_CATEGORY_ID) {
      alert("미리알림은 지우면 안되요!");
      return null;
    }
    handleSelectCategory(DEFAULT_CATEGORY_ID);
    handleDelCategory(category.id);
  };

  onChangeCategoryText = e => {
    this.setState({
      ...this.state,
      categoryText: e.target.value
    });
  };

  onKeyDown = e => {
    if (e.key === "Enter") {
      this.saveCategory(e.target.value);
    }
  };

  saveCategory = categoryText => {
    const {
      category: { id },
      handleChangeCategoryText
    } = this.props.categoryContainer;
    handleChangeCategoryText(id, categoryText);
  };

  render() {
    const {
      category,
      focus,
      handleSelectCategory
    } = this.props.categoryContainer;

    return (
      <li>
        <span>
          <input
            className="category"
            value={this.state.categoryText}
            onChange={this.onChangeCategoryText}
            onClick={() => handleSelectCategory(category.id)}
            onKeyDown={this.onKeyDown}
            onBlur={e => this.saveCategory(e.target.value)}
            autoFocus={focus}
          />
        </span>
        <button className="btn-delete-category" onClick={this.onDelCategory}>
          삭제
        </button>
      </li>
    );
  }
}

export default Category;
