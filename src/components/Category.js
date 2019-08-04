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
  }

  onDelCategory = () => {
    const {
      category,
      handleDelCategory,
      handleSelectCategory
    } = this.props.categoryContainer;
    if (category.id === "00001") {
      alert("미리알림은 지우면 안되요!");
      return null;
    }
    handleSelectCategory("00001");
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
      // console.log("Todo: Enter");
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
    const { category, handleSelectCategory } = this.props.categoryContainer;

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
          />
        </span>
        <button onClick={this.onDelCategory}>삭제</button>
      </li>
    );
  }
}
// const Category = props => {
//   // console.log("Category: ", props);
//   const {
//     category,
//     handleDelCategory,
//     handleSelectCategory
//   } = props.categoryContainer;
//   const onDelCategory = () => {
//     if (category.id === "00001") {
//       alert("미리알림은 지우면 안되요.");
//       return null;
//     }
//     handleSelectCategory("00001");
//     handleDelCategory(category.id);
//   };
//   return (
//     <li>
//       <span>
//         <input
//           className="category"
//           placeholder={category.name}
//           onClick={() => handleSelectCategory(category.id)}
//         />
//       </span>
//       <button onClick={onDelCategory}>삭제</button>
//     </li>
//   );
// };

export default Category;
