import React from "react";
import s from "../../styles/Input.module.css";

export default function Input({
  label,
  placeholder,
  type,
  value,
  handleChange,
}) {
  return (
    <div>
      <div>
        {label}
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={handleChange}
          className={s.input}
        ></input>
      </div>
    </div>
  );
}
