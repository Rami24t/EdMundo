import React from "react";
import { createContext, useReducer } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

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
        axios.get("/api/users/logout");
        return {
          ...state,
          user: null,
          // school: null,
          // class: null,
          // lessons: [],
        };
      // case "CREATE-LESSON":
      //   return {
      //     ...state,
      //     lessons: [...state.lessons, action.payload],
      //   };
      // case "DELETE-LESSON":
      //   return {
      //     ...state,
      //     lessons: state.lessons.filter(
      //       (lesson) => lesson._id !== action.payload,
      //     ),
      //   };
      // case "UPDATE-LESSON":
      //   return {
      //     ...state,
      //     lessons: state.lessons.map((lesson) =>
      //       lesson._id === action.payload._id ? action.payload : lesson,
      //     ),
      //   };
      // case "UPDATE-PROFILE":
      //   return {
      //     ...state,
      //     user: action.payload,
      //   };
      // case "UPDATE-SCHOOL":
      //   return {
      //     ...state,
      //     school: action.payload,
      //   };
      // case "UPDATE-CLASS":
      //   return {
      //     ...state,
      //     class: action.payload,
      //   };
      // case "UPDATE-LESSONS":
      //   return {
      //     ...state,
      //     lessons: action.payload,
      //   };
      case "LOADING":
        // console.log("loading");
        return {
          ...state,
          loading: true,
        };
      case "ERROR":
        // console.log("error");
        return {
          ...state,
          error: true,
        };
      case "DATA":
        // console.log("data");
        return {
          ...state,
          user: action.payload.user,
          school: action.payload.school,
          displaySchedule: action.payload.displaySchedule,
          // class: action.payload.class,
          // lessons: action.payload.lessons,
          loading: false,
          error: false,
        };
      case "CLEAR":
        return {
          ...state,
          loading: false,
          error: false,
        };

      default:
        return state;
    }
  };

  const initialState = {
    user: null,
    school: null,
    class: null,
    lessons: [],
    loading: false,
    error: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
