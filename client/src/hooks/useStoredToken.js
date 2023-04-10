import {useState} from "react";
import { useLocalStorage } from "react-use";

export const useStoredToken = () => {
  const [value, setValue, remove] = useLocalStorage("token");
  const [token, setToken] = useState(value);

  const setStoredToken = (val) => {
    setValue(val);
    setToken(val);
  };

  const removeStoredToken = () => {
    remove();
    setToken(null);
  };

  return {token, setToken: setStoredToken, removeToken: removeStoredToken};
};
