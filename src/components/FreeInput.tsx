import React from "react";
import { useState } from "react";

function FreeInput({ placeholder }) {
  const [value, setValue] = useState("");

  return (
    <textarea
      className="w-full bg-[var(--color-light-field)] dark:bg-[var(--color-dark-field)] rounded p-4"
      rows={4}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default FreeInput;