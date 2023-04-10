import {useState} from "react";
import { useSessionStorage } from "react-use";

export const useStoredToken = () => {
  const [value, setValue, remove] = useSessionStorage("token");
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
