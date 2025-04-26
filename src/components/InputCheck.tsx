import React, { useState } from "react";
import { ShieldCheckIcon, ShieldExclamationIcon } from "@heroicons/react/24/outline";

type InputCheckProps = {
  correct: string;
  mode?: "block" | "inline";
};

const InputCheck: React.FC<InputCheckProps> = ({ correct, mode = "block" }) => {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(true);
  };

  const isCorrect = value.trim().toLowerCase() === correct.trim().toLowerCase();

  return (
    <div className={mode === "inline" ? "inline-flex flex-col items-center relative" : "flex flex-col items-center mb-5 p-0 relative w-full max-w-md"}>
      <div className={mode === "inline" ? "flex flex-col items-center space-y-1" : "flex flex-col items-stretch w-full p-0 space-y-3"}>
        <div className="flex items-center w-full">
          <input
            type="text"
            className={`rounded-lg
              ${mode === "inline"
                ? "text-sm w-[80px] border-b border-gray-400 bg-[var(--field-light)] dark:bg-[var(--field-dark)] dark:border-gray-600 focus:border-[var(--accent)] focus:ring-0 px-1 py-0.5"
                : "border border-transparent bg-[var(--field-light)] dark:bg-[var(--field-dark)] w-full px-4 py-3 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-opacity-50"
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
          </div>
        </div>

        {/* Зарезервированное место под правильный ответ */}
        <div className="h-4 flex items-center justify-start">
          {checked && !isCorrect && (
            <p className={`text-xs ${mode === "inline" ? "text-rose-500" : "text-rose-500"}`}>
              Правильный ответ:{" "}
              <span className="font-semibold">{correct}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputCheck;
