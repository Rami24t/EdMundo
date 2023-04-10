import { useLocalStorage } from "react-use";

export default function useStoredUser() {
    return useLocalStorage("user", null);
}
