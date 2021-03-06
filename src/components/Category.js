import React, { Component } from "react";

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

    const { isNew } = this.props.categoryContainer;
    if (isNew) {
      this.onClickCategory();
    }
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

  onClickCategory = () => {
    const {
      category,
      handleSelectCategory,
      callbackResetSearchText
    } = this.props.categoryContainer;
    callbackResetSearchText();
    handleSelectCategory(category.id);
  };

  saveCategory = categoryText => {
    const {
      category: { id },
      handleChangeCategoryText
    } = this.props.categoryContainer;
    handleChangeCategoryText(id, categoryText);
  };

  render() {
    const { isNew } = this.props.categoryContainer;
    return (
      <li>
        <span>
          <input
            className="category"
            value={this.state.categoryText}
            onChange={this.onChangeCategoryText}
            onClick={this.onClickCategory}
            onKeyDown={this.onKeyDown}
            onBlur={e => this.saveCategory(e.target.value)}
            autoFocus={isNew}
          />
        </span>
        <button className="btn-delete-category" onClick={this.onDelCategory}>
          삭제
        </button>
      </li>
    );
  }
}

const DEFAULT_CATEGORY_ID = "00001";

export default Category;
