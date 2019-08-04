import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      isClicked: false,
      todoText: ""
    };
    // console.log("Todo: ", props);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      todoText: this.props.todoContainer.todoList.name
    });
  }

  onChangeTodoText = e => {
    this.setState({
      ...this.state,
      todoText: e.target.value
    });
  };

  onKeyDown = e => {
    if (e.key === "Enter") {
      // console.log("Todo: Enter");
      this.saveTodo(e.target.value);
    }
  };

  onClickLiTag = () => {
    this.setState({
      ...this.state,
      isClicked: !this.state.isClicked
    });
  };

  saveTodo = todoText => {
    const {
      todoList: { categoryId, id },
      handleChangeTodoText
    } = this.props.todoContainer;
    handleChangeTodoText(categoryId, id, todoText);
  };

  render() {
    const {
      todoList: { categoryId, id, complete },
      handleToggleCheckbox,
      handleDelTodo
    } = this.props.todoContainer;
    // console.log("Todo:", id, complete);
    const style = {
      textDecoration: complete ? "line-through" : "none"
    };
    const styleLiTag = {
      backgroundColor: this.state.isClicked ? "grey" : "white"
    };
    // console.log("Todo state: ", this.state);
    // console.log("Todo props: ", this.props);
    return (
      <div>
        <li
          className="todo-item"
          onClick={this.onClickLiTag}
          style={styleLiTag}
        >
          <span className="todo-checkbox">
            <input
              type="checkbox"
              onChange={e => handleToggleCheckbox(categoryId, id)}
            />
          </span>
          <span>
            <input
              style={style}
              value={this.state.todoText}
              onChange={this.onChangeTodoText}
              onKeyDown={this.onKeyDown}
              onBlur={e => this.saveTodo(e.target.value)}
            />
          </span>
          <button onClick={() => handleDelTodo(categoryId, id)}>삭제</button>
        </li>
      </div>
    );
  }
}

// onSecondClick = (() => {
//   let selectedTodoId = null;
//   return id => {
//     if (selectedTodoId === id) {
//       // console.log("selectedTodo Equal");
//       this.setState({
//         ...this.state,
//         editable: !this.state.editable
//       });
//     }
//     selectedTodoId = id;
//   };
// })();

// const Todo = props => {
//   // console.log("Todo: ", props);
//   let editable = false;
//   const {
//     todo: { name, complete, id },
//     callbackToggleCheckbox
//   } = props;
//   // console.log('Todo:', id, name, complete);
//   const style = {
//     textDecoration: complete ? "line-through" : "none"
//   };
//   const styleEditable = {
//     // disabled:
//   };
//   const onSecondClick = (() => {
//     let selectedTodoId = null;
//     return id => {
//       if (selectedTodoId === id) {
//         console.log("selectedTodo Equal");
//         editable = !editable;
//       }
//       selectedTodoId = id;
//     };
//   })();
//   return (
//     <div>
//       <input type="checkbox" onChange={e => callbackToggleCheckbox(id)} />
//       {editable ? (
//         <input placeholder={name} onClick={() => onSecondClick(id)} />
//       ) : (
//         <span style={style} onClick={() => onSecondClick(id)}>
//           {name}
//         </span>
//       )}
//     </div>
//   );
// };

export default Todo;
