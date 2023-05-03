// import {useState, useMemo} from "react";
// import { useSessionStorage } from "react-use";

// export const useStoredToken = () => {
//   const [value, setValue] = useSessionStorage("token", null);
//   let [token, setToken] = useState(value);

//   const setStoredToken = (val) => {
//     console.log("before setValue:", value); // check the current value before setting it
//     setValue(val);
//     setToken(val);
//     console.log("after setValue:", value); // check the new value after setting it
//   };

//   const removeStoredToken = () => {
//     // remove();
//     setValue(null);
//     sessionStorage.removeItem("token");
//     setToken(null);
//   };

//   const tokenMemo = useMemo(
//     () => ({
//       token,
//       setToken: setStoredToken,
//       removeToken: removeStoredToken,
//     }),
//     [token]
//   );

//   return tokenMemo;
// };
