import React from "react";
import { useState } from "react";

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
            className={`border rounded-md px-4 py-3 bg-zinc-100 w-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${checked
              ? isCorrect
                ? "border-green-500 ring-green-500"
                : "border-red-500 ring-red-500"
              : "border-zinc-300"
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
            className="ml-3 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            onClick={handleCheck}
          >
            Проверить
          </button>

          {/* Галочка и крестик */}
          <div className="ml-3 flex items-center">
            {checked && isCorrect && (
              <span className="text-green-600 text-lg transition-transform duration-300 transform scale-125">✅</span>
            )}
            {checked && !isCorrect && (
              <span className="text-red-600 text-lg transition-transform duration-300 transform scale-125">❌</span>
            )}
          </div>
        </div>

        {/* Место для текста с правильным ответом под инпутом */}
        {checked && !isCorrect && (
          <div className="absolute w-full -bottom-2 left-0 flex">
            <span className="text-sm text-red-500">
              Правильный ответ: <strong>{correct}</strong>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCheck;


