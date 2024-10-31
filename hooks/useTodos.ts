/* This line of code is making an asynchronous request to fetch data from the "/todos" endpoint
using the `apiClient.get` method. The response data is expected to be an array of objects that
match the `ToDosData` interface, which includes properties like `id`, `title`, and `completed`.
The response is stored in the `res` variable after the request is completed. */
import apiClient from "../src/services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";
export interface ToDosData {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

interface ToDosQuery {
  pageSize: number;
}
const useTodos = (query: ToDosQuery) =>
  useInfiniteQuery<ToDosData[], Error>({
    queryKey: ["todos"],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get<ToDosData[]>("/todos", {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
export default useTodos;
