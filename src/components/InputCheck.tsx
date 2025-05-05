import React, { useState, useEffect } from "react";
import { ShieldCheckIcon, ShieldExclamationIcon } from "@heroicons/react/24/outline";
import { useInputMemory } from "../hooks/useInputMemory";

type InputCheckProps = {
  correct: string;
  mode?: "block" | "inline";
};


const InputCheck: React.FC<InputCheckProps> = ({ correct, mode = "block" }) => {
  const [value, setValue] = useInputMemory(`inputcheck:${correct}`);
  const [checked, setChecked] = useState(false);

  const normalizeCyrillic = (input: string) => {
    return input
      .replace(/j/g, "ј")
      .replace(/J/g, "Ј");
  };

  const isCorrect =
    normalizeCyrillic(value.trim().toLowerCase()) ===
    normalizeCyrillic(correct.trim().toLowerCase());

  const handleCheck = () => {
    if (value.trim() !== "") {
      setChecked(true);
    }
  };

  return (
    <div className={mode === "inline"
      ? "inline-flex flex-wrap items-center gap-1 relative max-w-full"
      : "flex flex-col items-center mb-5 p-0 relative w-full max-w-md"}>

      <div className={mode === "inline"
        ? "relative flex items-center"
        : "relative flex items-center w-full"}>

        <input
          type="text"
          className={`rounded-lg
            ${mode === "inline"
              ? "text-sm min-w-0 w-auto max-w-[120px] border-b border-gray-400 bg-[var(--field-light)] dark:bg-[var(--field-dark)] px-1 py-0.5"
              : "max-w-[220px] border border-transparent bg-[var(--field-light)] dark:bg-[var(--field-dark)] w-full px-4 py-3 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-opacity-50"
            }
            ${checked
              ? isCorrect
                ? "border-lime-500 ring-1 ring-lime-500"
                : "border-rose-500 ring-1 ring-rose-500"
              : ""
            }`}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setChecked(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCheck();
            }
          }}
          onBlur={handleCheck}
          placeholder={mode === "inline" ? "..." : "Введите ответ"}
        />

        {mode === "block" && (
          <button
            className="ml-3 p-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ease-in-out cursor-pointer"
            onClick={handleCheck}
          >
            Проверить
          </button>
        )}

        <div className="ml-2 flex items-center justify-center">
          {checked && isCorrect && (
            <ShieldCheckIcon className="size-5 text-lime-500" />
          )}
          {checked && !isCorrect && (
            <ShieldExclamationIcon className="size-5 text-rose-500" />
          )}
          {!checked && (
            <ShieldExclamationIcon className="size-5 opacity-0" />
          )}
        </div>

        <div className="absolute top-full left-0 mt-1 max-w-xs break-words transition-opacity duration-300 ease-in-out"
          style={{ opacity: checked && !isCorrect ? 1 : 0 }}>
          <p className="text-xs text-rose-500 leading-snug">
            Правильно: <span className="font-semibold">{correct}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputCheck;
