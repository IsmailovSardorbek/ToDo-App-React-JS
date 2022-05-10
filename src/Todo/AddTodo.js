import React, { useState } from "react";

export default function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");

  const [items, setItems] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue((value) => (value = ""));
      setItems((item) => item + 1);
    }
  };
  const formStyles = {
    input: {
      border: "1.5px solid #222",
      padding: "6px",
      outline: "0",
      borderRadius: "8px 0 0 8px",
    },

    addBtn: {
      padding: "7.5px",
      border: "0",
      background: "#000",
      color: "#fff",
      borderRadius: "0 8px 8px 0",
    },
  };

  return (
    <form style={{ margin: "20px 0" }} onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        style={formStyles.input}
      />
      <button type="submit" onClick={handleSubmit} style={formStyles.addBtn}>
        Add item {items}
      </button>
    </form>
  );
}
