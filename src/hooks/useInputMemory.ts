import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function useInputMemory(keyBase: string, initial: string = "") {
  const [value, setValue] = useState(initial);
  const [localKey, setLocalKey] = useState<string | null>(null);

  useEffect(() => {
    const uuidKey = `${keyBase}:uuid`;
    const existingUuid = localStorage.getItem(uuidKey);
    const uuid = existingUuid || uuidv4();

    if (!existingUuid) {
      localStorage.setItem(uuidKey, uuid);
    }

    const fullStorageKey = `${keyBase}:value:${uuid}`;
    const saved = localStorage.getItem(fullStorageKey);
    if (saved !== null) {
      setValue(saved);
    }

    setLocalKey(uuid);
  }, [keyBase]);

  const setPersistentValue = (val: string) => {
    setValue(val);
    if (localKey) {
      localStorage.setItem(`${keyBase}:value:${localKey}`, val);
    }
  };

  return [value, setPersistentValue] as const;
}
