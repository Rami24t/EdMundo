import React from "react";
import { createContext, useReducer } from "react";
// import { useNavigate } from "react-router-dom";

export const Context = createContext();

export default function ContextProvider({ children }) {

const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          user: action.payload,
        };
      case "LOGOUT":
        return {
          ...state,
          user: null,
        }
      case "CREATE-LESSON":
        return {
          ...state,
          lessons: [...state.lessons, action.payload],
        };
      case "DELETE-LESSON":
        return {
          ...state,
          lessons: state.lessons.filter((lesson) => lesson._id !== action.payload),
        };
      case "UPDATE-LESSON":
        return {
          ...state,
          lessons: state.lessons.map((lesson) =>
            lesson._id === action.payload._id ? action.payload : lesson
          ),
        };
      case "UPDATE-PROFILE":
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  };

  const initialState = {
    user: null,
    lessons: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);



return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  );
}