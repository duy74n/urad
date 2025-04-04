import axios from "axios"

export type PostType = {
  id: string
  title: string
  body: string
}

export class PostNotFoundError extends Error {}

export const fetchPost = async (postId: string) => {
  console.info(`Fetching post with id ${postId}...`)
  await new Promise((r) => setTimeout(r, 1000))
  const post = await axios
    .get<PostType>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((r) => r.data)
    .catch((err) => {
      if (err.status === 404) {
        throw new PostNotFoundError(`Post with id "${postId}" not found!`)
      }
      throw err
    })

  return post
}

export const fetchPosts = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  return axios
    .get<Array<PostType>>("https://jsonplaceholder.typicode.com/posts")
    .then((r) => r.data.slice(0, 10))
}
