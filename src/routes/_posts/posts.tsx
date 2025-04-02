import { useSuspenseQuery } from "@tanstack/react-query"
import { Link, Outlet, createFileRoute } from "@tanstack/react-router"
import { postsQueryOptions } from "../../queries/queryOptions"

export const Route = createFileRoute("/_posts/posts")({
  component: RouteComponent,
  pendingComponent: () => <div>Loading Posts ...</div>,
  notFoundComponent: () => <div>Posts not found!</div>,
})

function RouteComponent() {
  const { data: posts } = useSuspenseQuery(postsQueryOptions())

  return (
    <div className='p-2'>
      {posts?.map((post) => (
        <Link
          key={post.id}
          to='/posts/$postId'
          params={{
            postId: post.id,
          }}
          className='block py-1 text-blue-600 hover:opacity-75'
          activeProps={{ className: "font-bold underline" }}
        >
          {post.title}
        </Link>
      ))}
      <hr />
      <Outlet />
    </div>
  )
}
