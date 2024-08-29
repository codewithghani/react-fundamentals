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
  const handleDelete = (id: number) => {
    const originalPosts = [...posts];
    setPosts(posts.filter((post) => post.id !== id));
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .catch((err) => {
        setError(err.message);
        setPosts(originalPosts);
      });
  };
  const handleAddPost = () => {
    const originalPosts = [...posts];
    const newPost = { id: 0, title: "My New Post", body: "lorem10" };
    setPosts([newPost, ...posts]);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then(({ data: newPost }) => setPosts([newPost, ...posts]))
      .catch((err) => {
        setError(err.message);
        setPosts(originalPosts);
      });
  };
  return (
    <div>
      <h2 className="container text-center bg-info p-5 text-white rounded">
        Posts from JSON Placeholder - Using Axios & UseEff Hook
      </h2>
      {error && (
        <h2 className="text-danger text-center text-lg-center mt-5">{error}</h2>
      )}
      {isLoading && (
        <div className="spinner-grow text-primary mx-auto mx-lg-auto">
          {" "}
          <span className=" visually-hidden"> fetching data</span>{" "}
        </div>
      )}
      <button
        type="button"
        className="btn btn-outline-primary mb-5"
        onClick={handleAddPost}
      >
        Add Post
      </button>
      <ul className=" list-group">
        {posts.map((post) => {
          return (
            <li key={post.id} className=" list-group-item p-5 mb-5">
              <div className="container d-flex justify-content-between ">
                <h2 className="text-primary">{post.title}</h2>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(post.id)}
                >
                  {" "}
                  Delete
                </button>
              </div>
              <div className=" card-body mt-5">{post.body}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
