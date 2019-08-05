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
    return (
      <div>
        <li className="todo-item">
          <span className="todo-checkbox">
            <input
              type="checkbox"
              onChange={e => handleToggleCheckbox(categoryId, id)}
            />
          </span>
          <span>
            <input
              className="input-todo"
              style={style}
              value={this.state.todoText}
              onChange={this.onChangeTodoText}
              onKeyDown={this.onKeyDown}
              onBlur={e => this.saveTodo(e.target.value)}
            />
          </span>
          <button
            className="btn-del-todo"
            onClick={() => handleDelTodo(categoryId, id)}
          >
            삭제
          </button>
        </li>
      </div>
    );
  }
}

export default Todo;
