import React, { useContext } from "react";

import Context from "./constext";

export default function Footer(todo) {
  const { removeAll } = useContext(Context);
  const { filterProgress } = useContext(Context);
  const { filterComplete } = useContext(Context);

  return (
    <div>
      <button
      //onSubmit
      >
        All
      </button>
      <button onClick={() => filterProgress(todo.isComplete === false)}>
        In progress
      </button>
      <button onClick={() => filterComplete(todo.isComplete === true)}>
        Completed
      </button>
      <button onClick={() => removeAll(todo.isComplete === true)}>
        Clear completed
      </button>
    </div>
  );
}
