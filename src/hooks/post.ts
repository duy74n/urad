import { useQuery } from "@tanstack/react-query";
import { fetchPost, fetchPosts } from "../utils/posts";

export const useGetPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  });
};

export const useGetPost = (postId: string) => {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPost(postId),
  });
};
