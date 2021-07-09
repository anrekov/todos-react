import "./App.css";
import React, { useState } from "react";

import ToDoHeader from "./components/todolist/todoHeader";
import EditLine from "./components/todolist/addTodo";
import List from "./components/todolist/todoList";
import Footer from "./components/todolist/TodoFooter";
import Context from "./components/todolist/constext";

export default function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const [filterTodo, setFilter] = useState("all");

  function changeStatus(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todoItem) => todoItem.id !== id));
  }
  function removeAll(isComplete) {
    setTodos(todos.filter((todoItem) => todoItem.isComplete === isComplete));
  }

  function addNewTodo(title) {
    setTodos(todos.concat([{ title, id: Date.now(), isComplete: false }]));
  }

  function filter(todos){
    
  }

  return (
    <Context.Provider
      value={{
        changeStatus,
        removeTodo,
        removeAll,
      }}
    >
      <>
        <ToDoHeader />
        <EditLine
          placeholder="What need's to be done"
          createNewTodo={addNewTodo}
        />
        <List todos={filterTodo} onChange={changeStatus} />
        <Footer todos={todos} />
      </>
    </Context.Provider>
  );
}
