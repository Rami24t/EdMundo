import useSWR from "swr";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

function getCookie(name) {
  var cookies = "; " + document.cookie;
  var splitCookie = cookies.split("; " + name + "=");
  if (splitCookie.length === 2)
    // return splitCookie.pop();
    return true;
  //return null;
  else return false;
}

export default function useUser() {
  const { data, error, isLoading } = useSWR(
    getCookie("OnlineSchoolUser") && baseUrl + "/api/users/getData",
    () =>
      axios.get(baseUrl + "/api/users/getData", {
        withCredentials: true,
      }),
  );
  return { data, error, isLoading };
}
