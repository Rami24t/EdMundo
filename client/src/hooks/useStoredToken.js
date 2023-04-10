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
  console.log("Token inside storedToken: " + token);
  return {token, setToken: setStoredToken, removeToken: removeStoredToken, getToken: () => {return token}};
};
