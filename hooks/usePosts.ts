import apiClient from "../src/services/apiClient";
import { useQuery } from "@tanstack/react-query";

interface PostsData {
  id: number;
  title: string;
  body: string;
}
const usePosts = () => {
  const fetchPosts = async () => {
    const res = await apiClient.get<PostsData[]>("/posts");

    return res.data;
  };
  return useQuery<PostsData[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
};

export default usePosts;
