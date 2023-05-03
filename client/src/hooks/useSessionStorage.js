import { useState, useMemo } from "react";
import { useSessionStorage } from "react-use";

export default function useStoredItem(name) {
  const [value, setValue] = useSessionStorage(name, null);
  const [item, setItem] = useState(value);

  const setStoredItem = (val) => {
    setValue(val);
    setItem(val);
  };

  const removeStoredItem = () => {
    setValue(null);
    setItem(null);
  };

  const capitalized = name.charAt(0).toUpperCase() + name.slice(1);

  const memo = useMemo(
    () => ({
      [name]: item,
      [`set${capitalized}`]: setStoredItem,
      [`remove${capitalized}`]: removeStoredItem,
    }),
    [item]
  );

  return memo;
}
