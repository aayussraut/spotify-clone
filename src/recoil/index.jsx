import { atom } from "recoil";
import { getSession } from "../utils/auth";
export const userAtom = atom({
  key: "authAtom",
  default: {
    user: getSession("user") || null,
    isLoading: false,
  },
});
