import { atom } from "jotai"
import Cookies from "js-cookie"

export const isAuthenticatedAtom = atom(
  Cookies.get("isAuthenticated") === "true"
)
