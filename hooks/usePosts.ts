import apiClient from "../src/services/apiClient";
import { useQuery } from "@tanstack/react-query";

interface PostsData {
  id: number;
  title: string;
  body: string;
}
const usePosts = () => {
  const fetchToDos = async () => {
    const res = await apiClient.get<PostsData[]>("/posts");

    return res.data;
  };
  return useQuery<PostsData[], Error>({
    queryKey: ["posts"],
    queryFn: fetchToDos,
  });
};

export default usePosts;
