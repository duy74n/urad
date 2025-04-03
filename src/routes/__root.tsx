import {
  Link,
  Outlet,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { useAtom } from "jotai"
import { type AuthContext, useAuth } from "../hooks/useAuth"
import { isAuthenticatedAtom } from "../store"

type RouterContext = {
  authentication: AuthContext
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    const [isAuth] = useAtom(isAuthenticatedAtom)
    const router = useRouter()
    const { signOut } = useAuth()

    return (
      <>
        <div className='p-2 flex gap-2'>
          <Link
            to='/'
            className='[&.active]:font-bold'
          >
            Home
          </Link>
          <Link
            to='/about'
            className='[&.active]:font-bold'
          >
            About
          </Link>
          {isAuth ? (
            <>
              <Link
                to='/posts'
                className='[&.active]:font-bold'
              >
                Posts
              </Link>
              <Link
                to='/dashboard'
                className='[&.active]:font-bold'
              >
                Dashboard
              </Link>
              <Link
                to='/settings'
                className='[&.active]:font-bold'
              >
                Settings
              </Link>
              <button
                type='button'
                className='[&.active]:font-bold ml-auto'
                onClick={async () => {
                  signOut()
                  router.invalidate()
                  router.navigate({
                    to: "/",
                    replace: true,
                  })
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to='/login'
              className='ml-auto'
            >
              Login
            </Link>
          )}
        </div>
        <hr />
        <div className='p-2'>
          <Outlet />
        </div>
        <TanStackRouterDevtools />
      </>
    )
  },
})
