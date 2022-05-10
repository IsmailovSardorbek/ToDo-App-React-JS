import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./Todo/TodoList";
import Context from "./Todo/Context";
import AddTodo from "./Todo/AddTodo";
export default function App() {
  const [todos, setTodos] = useState([]);

  function ToggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodos(title) {
    setTodos(
      todos.concat({
        title,
        id: Date.now(),
        completed: false,
      })
    );
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App">
        <h1> Todo App </h1>
        <AddTodo onCreate={addTodos} />
        {todos.length ? (
          <TodoList todos={todos} toggleTodo={ToggleTodo} />
        ) : (
          <p>No todos...</p>
        )}
      </div>
    </Context.Provider>
  );
}
