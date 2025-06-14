import React, { useEffect, useState } from "react";
import { useInputMemory } from "../hooks/useInputMemory";

/**
 * FreeInput компонент для свободного ввода текста с сохранением в localStorage
 * @param placeholder Текст подсказки и уникальный идентификатор
 */
function FreeInput({ placeholder }: { placeholder: string }) {
  // Создаем стабильный ключ, заменяя специальные символы
  const storageKey = `freeinput:${placeholder.replace(/[^a-zA-Z0-9а-яА-Я]/g, "_")}`;

  // Используем обновленный хук с JSON-оптимизацией
  // Нам нужны только первые два возвращаемых значения, т.к. FreeInput не использует checked
  const [value, setValue] = useInputMemory(storageKey);

  // Автоматическое изменение высоты поля ввода
  const [rows, setRows] = useState(2);

  useEffect(() => {
    // Подсчитываем количество строк для определения высоты
    const lineBreaks = (value.match(/\n/g) || []).length;
    const newRows = Math.max(2, Math.min(10, lineBreaks + 2));
    setRows(newRows);
  }, [value]);

  return (
    <textarea
      className="w-full bg-[var(--field-light)] dark:bg-[var(--field-dark)] rounded-xl p-4 text-[var(--text-light)] dark:text-[var(--text-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-opacity-50 transition-all duration-300"
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}

export default FreeInput;