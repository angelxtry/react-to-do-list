import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      this.manageTodo(e.target.value);
    }
    if (e.keyCode === 27) {
      this.setState({
        todoText: ""
      });
    }
  };

  manageTodo = todoText => {
    const {
      todoList: { categoryId, id },
      handleAddTodo,
      handleChangeTodoText,
      handleDelTodo
    } = this.props.todoContainer;
    if (todoText === "") {
      handleDelTodo(categoryId, id);
    } else {
      handleChangeTodoText(categoryId, id, todoText);
      handleAddTodo(categoryId);
    }
  };

  render() {
    const {
      todoList: { categoryId, id, isNew, complete },
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
              checked={complete}
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
              onBlur={e => this.manageTodo(e.target.value)}
              autoFocus={isNew}
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
