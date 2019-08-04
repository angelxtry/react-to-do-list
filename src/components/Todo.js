import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      todoText: ""
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      todoText: this.props.todo.name
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
    const {
      todo: { categoryId, id },
      callbackChangeTodoText
    } = this.props;
    if (e.key === "Enter") {
      console.log("Todo: Enter");
      callbackChangeTodoText(categoryId, id, e.target.value);
    }
  };

  render() {
    const {
      // todo: { name, complete, id, categoryId },
      todo: { complete, id, categoryId },
      callbackToggleCheckbox
    } = this.props;
    // console.log('Todo:', id, name, complete);
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
              onChange={e => callbackToggleCheckbox(categoryId, id)}
            />
          </span>
          <span>
            <input
              style={style}
              value={this.state.todoText}
              onChange={this.onChangeTodoText}
              onKeyDown={this.onKeyDown}
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
