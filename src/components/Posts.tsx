import axios from "axios";
import { useEffect, useState } from "react";
interface PostsData {
  id: number;
  title: string;
  body: string;
}
const Posts = () => {
  const [posts, setPosts] = useState<PostsData[]>([]);
  useEffect(() => {
    axios
      .get<PostsData[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data));
  }, []);
  return (
    <div>
      <h2 className="container text-center bg-info p-5 text-white rounded">
        Posts from JSON Placeholder - Using Axios & UseEff Hook
      </h2>
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
