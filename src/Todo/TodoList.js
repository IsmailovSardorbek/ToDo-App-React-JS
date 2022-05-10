import React from "react";
import TodoItem from "./TodoItem";
export default function TodoList({ todos, toggleTodo, clearTodo }) {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} handleChange={toggleTodo} />;
      })}
    </ul>
  );
}
