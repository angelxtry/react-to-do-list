import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      todoText: ""
    };
    console.log('Todo: ', props.todo);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      todoText: this.props.todo.todo.name
    });
  }

  onSecondClick = (() => {
    let selectedTodoId = null;
    return id => {
      if (selectedTodoId === id) {
        // console.log("selectedTodo Equal");
        this.setState({
          ...this.state,
          editable: !this.state.editable
        });
      }
      selectedTodoId = id;
    };
  })();

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

  saveTodo = (todoText) => {
    const {
      todo: { categoryId, id },
      handleChangeTodoText
    } = this.props.todo;
    handleChangeTodoText(categoryId, id, todoText);
  }

  render() {
    const {
      // todo: { name, complete, id, categoryId },
      todo: { complete, id, categoryId },
      handleToggleCheckbox
    } = this.props.todo;
    console.log('Todo:', id, complete);
    const style = {
      textDecoration: complete ? "line-through" : "none"
    };
    // console.log("Todo state: ", this.state);
    // console.log("Todo props: ", this.props);
    return (
      <div>
        <li>
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
        </li>
      </div>
    );
  }
}

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
