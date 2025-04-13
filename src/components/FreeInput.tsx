import { useState } from "react";

function FreeInput({ placeholder }) {
  const [value, setValue] = useState("");

  return (
    <textarea
      className="w-full border border-zinc-300  bg-zinc-100 rounded p-2"
      rows={4}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default FreeInput;