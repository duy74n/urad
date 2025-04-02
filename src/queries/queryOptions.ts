import { queryOptions } from "@tanstack/react-query"
import { fetchPost, fetchPosts } from "../utils/apis"

export const postQueryOptions = (postId: string) =>
  queryOptions({
    queryKey: ["posts", { postId }],
    queryFn: () => fetchPost(postId),
  })

export const postsQueryOptions = () =>
  queryOptions({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  })
