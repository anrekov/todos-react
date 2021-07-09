import React from "react";
import TodoItem from "./todoItem";

export default function List(todos) {
  return (
    <ul>
      {todos.todos.map((todoItem) => {
        return <TodoItem todo={todoItem} key={todoItem.id} />;
      })}
    </ul>
  );
}
