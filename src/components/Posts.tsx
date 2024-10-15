import apiClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
interface PostsData {
  id: number;
  title: string;
  body: string;
}
const Posts = () => {
  const fetchToDos = async () => {
    const res = await apiClient.get<PostsData[]>("/posts");
    return res.data;
  };
  const { data: todos } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchToDos,
  });

  // const handleDelete = (id: number) => {
  //   const originalPosts = [...posts];
  //   setPosts(todos?.filter((post) => post.id !== id));
  //   apiClient.delete("/posts/" + id).catch((err) => {
  //     setError(err.message);
  //     setPosts(originalPosts);
  //   });
  // };
  // const handleAddPost = () => {
  //   const originalPosts = [...todos];
  //   const newPost = { id: 0, title: "My New Post", body: "lorem10" };
  //   setPosts([newPost, ...posts]);
  //   apiClient
  //     .post("/posts", newPost)
  //     .then(({ data: newPost }) => setPosts([newPost, ...posts]))
  //     .catch((err) => {
  //       setError(err.message);
  //       setPosts(originalPosts);
  //     });
  // };
  // const handleUpdate = (post: PostsData) => {
  //   const originalPosts = [...posts];
  //   const updatedPost = { ...post, title: post.title + "@123" };
  //   setPosts(posts.map((p) => (p.id === post.id ? updatedPost : p)));
  //   apiClient.patch("/posts/" + post.id, updatedPost).catch((err) => {
  //     setError(err.message);
  //     setPosts(originalPosts);
  //   });
  // };
  return (
    <div>
      <h2 className="container text-center bg-info p-5 text-white rounded">
        Posts from JSON Placeholder - Using Axios & UseEff Hook
      </h2>

      <ul className=" list-group">
        {todos?.map((post) => {
          return (
            <li key={post.id} className=" list-group-item p-5 mb-5">
              <div className="container d-flex justify-content-between ">
                <h2 className="text-primary">{post.title}</h2>
                <div></div>
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
