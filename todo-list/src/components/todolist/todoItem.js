import React, { useContext } from "react";

import Context from "./constext";

export default function TodoItem({ todo }) {
  const { changeStatus } = useContext(Context);
  const { removeTodo } = useContext(Context);
  const classes = ["inProgress"];

  if (todo.isComplete) {
    classes.pop("inProgress");
    classes.push("completed");
  }

  return (
    <li className={classes.join(" ")}>
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={() => changeStatus(todo.id)}
      />
      {todo.title}
      <button onClick={() => removeTodo(todo.id)}>X</button>
    </li>
  );
}
