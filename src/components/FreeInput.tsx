import React from "react";
import { useState } from "react";

function FreeInput({ placeholder }: { placeholder: string }) {
  const [value, setValue] = useState("");

  return (
    <textarea
      className="w-full bg-[var(--field-light)] dark:bg-[var(--field-dark)] rounded-xl p-4 text-[var(--text-light)] dark:text-[var(--text-dark)]"
      rows={2}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default FreeInput;