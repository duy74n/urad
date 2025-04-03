import { useSetAtom } from "jotai"
import Cookies from "js-cookie"
import { isAuthenticatedAtom } from "../store"

export const useAuth = () => {
  const setAuthenticated = useSetAtom(isAuthenticatedAtom)
  const signIn = () => {
    Cookies.set("isAuthenticated", "true")
    setAuthenticated(true)
  }

  const signOut = () => {
    Cookies.set("isAuthenticated", "false")
    setAuthenticated(false)
  }

  const isLogged = () => Cookies.get("isAuthenticated") === "true"

  return { signIn, signOut, isLogged }
}

export type AuthContext = ReturnType<typeof useAuth>
