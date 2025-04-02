import { useSuspenseQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { postQueryOptions } from "../../queries/queryOptions"

export const Route = createFileRoute("/_posts/posts/$postId")({
  component: PostComponent,
  pendingComponent: () => <div>Loading post detail ...</div>,
  errorComponent: () => <div>Post not found!</div>,
})

function PostComponent() {
  const postId = Route.useParams().postId
  const { data: post } = useSuspenseQuery(postQueryOptions(postId))

  return (
    <div className='space-y-2'>
      <h4 className='text-xl font-bold underline'>{post.title}</h4>
      <div className='text-sm'>{post.body}</div>
    </div>
  )
}
