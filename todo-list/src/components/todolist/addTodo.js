import React, { useState } from "react";

export default function EditLine({ placeholder, createNewTodo }) {
  const [value, setValue] = useState("");

  function newTodo(event) {
    event.preventDefault();
    if (value.trim()) {
      createNewTodo(value);
      setValue("");
    }
  }

  return (
    <form onSubmit={newTodo}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
      />
    </form>
  );
}
