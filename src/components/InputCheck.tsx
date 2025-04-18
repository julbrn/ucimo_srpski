import React from "react";
import { useState } from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { ShieldExclamationIcon } from "@heroicons/react/24/outline";

function InputCheck({ correct }) {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(true);
  };

  const isCorrect = value.trim().toLowerCase() === correct.trim().toLowerCase();

  return (
    <div className="flex flex-col items-center mb-5 p-0 relative w-full max-w-md">
      <div className="flex flex-col items-stretch w-full p-0 space-y-3">
        {/* Инпут с анимацией изменения рамки */}
        <div className="flex w-full items-center">
          <input
            type="text"
            className={`border border-transparent rounded-md px-4 py-3 
              bg-[var(--color-light-field)] dark:bg-[var(--color-dark-field)] 
              w-full transition-all duration-300 ease-in-out 
              focus:outline-none focus:ring-2 focus:ring-[var(--color-link-primary)] focus:ring-opacity-50 
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
            placeholder="Введите ответ"
          />

          {/* Кнопка с текстом "Проверить" */}
          <button
            className="ml-3 p-3 bg-[var(--color-link)] text-white rounded-md focus:outline-none focus:ring-2 transition-all duration-300 ease-in-out cursor-pointer"
            onClick={handleCheck}
          >
            Проверить
          </button>

          {/* Галочка и крестик */}
          <div className="ml-2 w-10 h-8 flex items-center justify-center">
            {checked && isCorrect && (
              <ShieldCheckIcon className="size-6 text-lime-500" />
            )}
            {checked && !isCorrect && (
              <ShieldExclamationIcon className="size-6 text-rose-500" />
            )}
          </div>
        </div>

        {/* Место для текста с правильным ответом под инпутом */}
        {checked && !isCorrect && (
          <div className="absolute w-full -bottom-3 left-0 flex">
            <p className="text-sm text-rose-500">Правильный ответ:
              <span className="text-base text-white">&nbsp;{correct}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCheck;


