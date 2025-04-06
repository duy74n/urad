import { Button, Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
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
    const { signIn, signOut, isLogged } = useAuth()
    const [opened, { open, close }] = useDisclosure(false)

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
              <div className='ml-auto'>
                <Button
                  onClick={() => open()}
                  variant='outline'
                >
                  Sign Out
                </Button>
              </div>
            </>
          ) : (
            <div className='ml-auto'>
              <Button
                onClick={() => open()}
                variant='outline'
              >
                Sign In
              </Button>
            </div>
          )}
        </div>
        <hr />
        <div className='p-2'>
          <Outlet />
        </div>
        <Modal
          opened={opened}
          onClose={close}
          title='Authentication'
          centered
        >
          {isLogged() ? (
            <>
              <p className='text-lg font-bold'>Hello user!</p>
              <Button
                onClick={async () => {
                  signOut()
                  router.navigate({
                    to: "/",
                    replace: true,
                  })
                  close()
                }}
              >
                Sign out
              </Button>
            </>
          ) : (
            <Button
              onClick={async () => {
                signIn()
                close()
              }}
            >
              Sign in
            </Button>
          )}
        </Modal>
        <TanStackRouterDevtools />
      </>
    )
  },
})
