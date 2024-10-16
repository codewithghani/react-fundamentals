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

interface ToDosQuery {
  page: number;
  pageSize: number;
}
const useTodos = (query: ToDosQuery) => {
  const fetchToDos = async () => {
    const res = await apiClient
      .get<ToDosData[]>("/todos", {
        params: {
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);
    return res;
  };
  return useQuery<ToDosData[], Error>({
    queryKey: ["todos", query],
    queryFn: fetchToDos,
    staleTime: 1000 * 60, // 1 minute
  });
};

export default useTodos;
