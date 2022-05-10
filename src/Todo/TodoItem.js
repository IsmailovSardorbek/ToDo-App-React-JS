import React, { useContext } from "react";
import Context from "./Context";
const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    border: "2px solid #000",
    padding: "1rem",
    alignItems: "center",
    borderRadius: "8px",
    marginBottom: "1.4rem",
  },

  remove: {
    background: "crimson",
    color: "#fff",
    border: "1px solid crimson",
    padding: "0.1rem 0.5rem",
    borderRadius: "16px",
    fontSize: "18px",
  },
};
export default function TodoItem({ todo, handleChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("checked");
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input type="checkbox" onChange={() => handleChange(todo.id)} />
        &nbsp;
        <strong>{todo.title}</strong>
      </span>
      <button style={styles.remove} onClick={() => removeTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
}
