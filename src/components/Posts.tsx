import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";
interface PostsData {
  id: number;
  title: string;
  body: string;
}
const Posts = () => {
  const [posts, setPosts] = useState<PostsData[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const getUsers = async () => {
      try {
        const res = await axios.get<PostsData[]>(
          "https://jsonplaceholder.typicode.com/posts",
          { signal: controller.signal }
        );
        setPosts(res.data);
        setLoading(false);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        setLoading(false);
      }
    };
    getUsers();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div>
      <h2 className="container text-center bg-info p-5 text-white rounded">
        Posts from JSON Placeholder - Using Axios & UseEff Hook
      </h2>
      {error && (
        <h2 className="text-danger text-center text-lg-center mt-5">{error}</h2>
      )}
      {isLoading && (
        <div className="container d-flex justify-content-center align-items-center mt-5 mb-5">
          {" "}
          <span className="spinner-grow text-primary"></span>{" "}
        </div>
      )}
      <p>
        {posts.map((post) => {
          return (
            <div className="container mb-3 bg-body-secondary border-1 rounded p-5">
              <h5 className=" card-header card-text card-title text-primary mb-3">
                {post.title.toLocaleUpperCase()}
              </h5>
              <p className="card-text"> {post.body}</p>
            </div>
          );
        })}
      </p>
    </div>
  );
};

export default Posts;
