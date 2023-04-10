import {useState, useMemo} from "react";
import { useSessionStorage } from "react-use";

export const useStoredToken = () => {
  const [value, setValue, remove] = useSessionStorage("token", null);
  let [token, setToken] = useState(value);

  const setStoredToken = (val) => {
    token=val;
    setToken(val);
    setValue(val);
  };

  const removeStoredToken = () => {
    // remove();
    setValue(null);
    sessionStorage.removeItem("token");
    setToken(null);
  };

  const tokenContext = useMemo(
    () => ({
      token,
      setToken: setStoredToken,
      removeToken: removeStoredToken,
    }),
    [token]
  );

  return tokenContext;
};
