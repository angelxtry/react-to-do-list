import React from "react";

const Todo = props => {
  // console.log("Todo: ", props);
  const {
    todo: { name, complete, id },
    callback
  } = props;
  console.log('Todo:', id, name, complete);
  const style = {
    textDecoration: complete ? "line-through" : "none"
  };
  return (
    <div>
      <input
        type="checkbox"
        onChange={e => callback(id)}
      />
      <span style={style}>{name}</span>
    </div>
  );
};

export default Todo;
