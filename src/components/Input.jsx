import React from "react";

export default function Input({ placeholder, value, handleChange }) {
  return (
    <div>
      <input
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
}
