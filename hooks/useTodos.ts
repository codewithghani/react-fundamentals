/* This line of code is making an asynchronous request to fetch data from the "/todos" endpoint
using the `apiClient.get` method. The response data is expected to be an array of objects that
match the `ToDosData` interface, which includes properties like `id`, `title`, and `completed`.
The response is stored in the `res` variable after the request is completed. */
import apiClient from "../src/services/apiClient";
import { useQuery } from "@tanstack/react-query";
interface ToDosData {
  id: number;
  title: string;
  completed: boolean;
}
const useTodos = () => {
  const fetchToDos = async () => {
    const res = await apiClient.get<ToDosData[]>("/todos");

    return res.data;
  };
  return useQuery<ToDosData[], Error>({
    queryKey: ["todos"],
    queryFn: fetchToDos,
  });
};

export default useTodos;
