import { createFileRoute, Link } from "@tanstack/react-router";
import { useGetPosts } from "../../hooks/post";

export const Route = createFileRoute("/posts/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useGetPosts();

  return (
    <div>
      {data?.map((post) => (
        <Link
          key={post.id}
          to="/posts/$postId"
          params={{
            postId: post.id,
          }}
          className="block py-1 text-blue-600 hover:opacity-75"
          activeProps={{ className: "font-bold underline" }}
        >
          {post.title}
        </Link>
      ))}
    </div>
  );
}
