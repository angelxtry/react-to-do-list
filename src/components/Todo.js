import React from "react";

const Todo = props => {
  console.log("Todo: ", props);
  const {
    todo: { name, complete, id },
    callback
  } = props;
  const style = {
    textDecoration: complete === true ? "line-through" : "none"
  };
  return (
    <div>
      <input
        type="checkbox"
        style={style}
        onChange={e => callback(id)}
      />
      {name}
    </div>
  );
};

export default Todo;
