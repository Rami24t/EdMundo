import { useState, createContext, useMemo } from "react";
import useStoredUser from "../hooks/useStoredUser";

export const Context = createContext({});

export default function ContextProvider({ children }) {
  const [storedUser, setStoredUser, removeStoredUser] = useStoredUser();
  const [user, setUser] = useState(storedUser);

  const updateUser = (user) => {
    setUser(user);
    setStoredUser(user);
  };

  const removeUser = () => {
    setUser(null);
    removeStoredUser();
  };

  const value = useMemo(
    () => ({
      user,
      setUser: updateUser,
      removeUser,
    }),
    [user]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}