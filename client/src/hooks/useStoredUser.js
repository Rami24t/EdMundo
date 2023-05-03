import { useSessionStorage } from "react-use";

export default function useStoredUser() {
    return useSessionStorage("user", null);
}
