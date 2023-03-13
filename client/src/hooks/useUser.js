import { useContext } from "react";
import useSWR from "swr";
import { Context } from "../components/Context";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

function getCookie(name) {
  var cookies = "; " + document.cookie;
  var splitCookie = cookies.split("; " + name + "=");
  if (splitCookie.lenght === 2) return splitCookie.pop();
  else return null;
}

export default function useUser() {
  const { state, dispatch } = useContext(Context);
  const { data, error, isLoading } = useSWR(
    getCookie("OnlineSchoolUser") && baseUrl + "/api/",
    () =>
      axios
        .get(baseUrl + "/api/user/getData", {
          withCredentials: true,
        })
        .then((res) => res.json()),
  );

  if (isLoading) dispatch({ type: "LOADING" });
  if (error) dispatch({ type: "ERROR" });
  if (data) {
    console.log("useUser ~ data", data);
    dispatch({ type: "DATA", payload: data });
  }
}
