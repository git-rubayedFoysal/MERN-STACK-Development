import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../features/Posts/postSlice";

function Posts() {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  let content = null;

  if (isLoading) {
    content = <h1>Posts Loading...</h1>;
  }
  if (!isLoading && isError) {
    content = <h1>{error}</h1>;
  }
  if (!isLoading && !isError && posts.length === 0) {
    content = <h1>No Post Available.</h1>;
  }
  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <ol className="list-decimal">
        {posts.map((post) => (
          <li className="py-2" key={post.id}>
            {post.title}
          </li>
        ))}
      </ol>
    );
  }
  return <div>{content}</div>;
}

export default Posts;
