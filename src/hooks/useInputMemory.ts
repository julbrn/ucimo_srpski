import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Интерфейс для хранения данных инпута
interface InputData {
  value: string;
  lastUpdated: number;
  checked?: boolean;
}

/**
 * Оптимизированный хук для сохранения ввода в localStorage
 * Использует одну JSON-запись для всех данных инпута
 * @param storageKey Ключ для хранения в localStorage
 * @param initial Начальное значение
 * @returns [value, setValue] tuple
 */
export function useInputMemory(storageKey: string, initial: string = "") {
  const [value, setValue] = useState(initial);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Попытка загрузить существующие данные при монтировании
  useEffect(() => {
    try {
      const savedData = localStorage.getItem(storageKey);
      if (savedData) {
        const parsedData: InputData = JSON.parse(savedData);
        setValue(parsedData.value);
        setHasInteracted(true);
      }
    } catch (e) {
      console.warn("Ошибка при чтении из localStorage", e);
    }
  }, [storageKey]);

  /**
   * Получение состояния checked для InputCheck
   */
  const getCheckedState = (): boolean => {
    try {
      const savedData = localStorage.getItem(storageKey);
      if (savedData) {
        const parsedData: InputData = JSON.parse(savedData);
        return !!parsedData.checked;
      }
    } catch (e) {
      console.warn("Ошибка при получении состояния checked", e);
    }
    return false;
  };

  /**
   * Установка состояния checked для InputCheck
   */
  const setCheckedState = (checked: boolean): void => {
    try {
      const inputData: InputData = {
        value,
        lastUpdated: Date.now(),
        checked,
      };

      localStorage.setItem(storageKey, JSON.stringify(inputData));
    } catch (e) {
      cleanupOldData();
      try {
        const inputData: InputData = {
          value,
          lastUpdated: Date.now(),
          checked,
        };
        localStorage.setItem(storageKey, JSON.stringify(inputData));
      } catch (e) {
        console.error(
          "Не удалось сохранить состояние проверки даже после очистки",
          e
        );
      }
    }
  };

  /**
   * Очистка старых данных в localStorage
   */
  const cleanupOldData = () => {
    const keysToAnalyze: Array<{ key: string; data: InputData }> = [];

    // Собираем все ключи с InputData
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;

      // Проверяем только наши ключи (inputcheck: или freeinput:)
      if (key.startsWith("inputcheck:") || key.startsWith("freeinput:")) {
        try {
          const data = JSON.parse(localStorage.getItem(key) || "{}");
          if (data.lastUpdated) {
            keysToAnalyze.push({ key, data });
          }
        } catch (e) {
          // Если не удается разобрать JSON, удаляем ключ
          localStorage.removeItem(key);
        }
      }
    }

    // Сортируем по времени последнего обновления (старые в начале)
    keysToAnalyze.sort((a, b) => a.data.lastUpdated - b.data.lastUpdated);

    // Удаляем треть самых старых записей
    const removeCount = Math.max(5, Math.ceil(keysToAnalyze.length / 3));
    for (let i = 0; i < removeCount && i < keysToAnalyze.length; i++) {
      localStorage.removeItem(keysToAnalyze[i].key);
    }

    console.log(`Очищено ${removeCount} старых записей из localStorage`);
  };

  /**
   * Установка значения с сохранением в localStorage
   */
  const setPersistentValue = (val: string) => {
    setValue(val);

    // Сохраняем только если пользователь взаимодействовал или значение изменилось
    if (val !== initial || hasInteracted) {
      setHasInteracted(true);

      try {
        const inputData: InputData = {
          value: val,
          lastUpdated: Date.now(),
          // Сохраняем состояние checked, если оно было
          ...(getCheckedState() ? { checked: true } : {}),
        };

        localStorage.setItem(storageKey, JSON.stringify(inputData));
      } catch (e) {
        console.warn("localStorage может быть переполнен, очищаем...");
        cleanupOldData();

        try {
          // Повторная попытка после очистки
          const inputData: InputData = {
            value: val,
            lastUpdated: Date.now(),
            ...(getCheckedState() ? { checked: true } : {}),
          };

          localStorage.setItem(storageKey, JSON.stringify(inputData));
        } catch (e) {
          // В критической ситуации очищаем всё
          console.error("Не удалось сохранить после очистки, очищаем всё", e);
          localStorage.clear();

          try {
            const inputData: InputData = {
              value: val,
              lastUpdated: Date.now(),
            };

            localStorage.setItem(storageKey, JSON.stringify(inputData));
          } catch (e) {
            console.error("Хранилище полностью неработоспособно", e);
          }
        }
      }
    }
  };

  return [value, setPersistentValue, getCheckedState, setCheckedState] as const;
}
