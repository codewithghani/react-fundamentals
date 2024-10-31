import useTodos, { ToDosData } from "../../../hooks/useTodos";
import {
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { MdPendingActions } from "react-icons/md";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import { FormLabel } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
interface FormData {
  title: string;
}
const Todos = () => {
  const queryClient = useQueryClient();
  const pageSize = 10;
  // const [userId, setUserId] = useState<number>(0);
  const {
    data: pages,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
  } = useTodos({ pageSize });
  const { register, handleSubmit } = useForm<FormData>();

  const addTodo = useMutation<ToDosData, Error, ToDosData>({
    mutationFn: (todo: ToDosData) =>
      apiClient.post<ToDosData>("/todosxx", todo).then((res) => res.data),
    onSuccess: (savedTodo) => {
      queryClient.setQueryData<ToDosData[]>(["todos"], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);
    },
  });

  return (
    <div>
      <Heading
        className="container text-center bg-info p-5 text-white rounded"
        display={"flex"}
        justifyContent={"center"}
      >
        {`Todos - Using  `}
        <Text color="grey" as={"i"}>
          tanstackQuery
        </Text>
      </Heading>
      <Select
        placeholder="Select User..."
        marginBottom={10}
        marginTop={10}
        paddingLeft={5}
      >
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </Select>

      {addTodo.error && (
        <Box
          background="tomato"
          width="100%"
          padding="4"
          color="white"
          textAlign={"center"}
          fontSize={"3xl"}
          marginBottom={3}
          borderRadius={4}
        >
          {addTodo.error.message}
        </Box>
      )}
      <Container
        marginBottom={3}
        border={"2px solid teal"}
        paddingX={10}
        paddingY={4}
        width={"100%"}
        borderRadius={5}
        backgroundColor={"whitesmoke"}
      >
        <form
          onSubmit={handleSubmit((data) => {
            if (data.title)
              addTodo.mutate({
                id: 0,
                title: data.title,
                completed: false,
                userId: 1,
              });
          })}
        >
          <FormLabel
            color={"teal"}
            fontSize={"x-large"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Add Todo
          </FormLabel>
          <HStack>
            <Input
              {...register("title")}
              id="title"
              type="text"
              border={"1px solid teal"}
              color={"grey"}
              fontSize={"large"}
              placeholder="Enter Your Todo Name..."
              backgroundColor={"Background"}
            />
            <Button type="submit" colorScheme="teal">
              Submit
            </Button>
          </HStack>
        </form>
      </Container>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {pages && (
        <UnorderedList className="list-group">
          {pages.pages.map((page) => (
            <React.Fragment>
              {page.map((todo) => {
                return (
                  <ListItem
                    display={"flex"}
                    justifyContent={"left"}
                    alignItems={"center"}
                    alignContent={"center"}
                    justifyItems={"center"}
                    key={todo.id}
                    className="list-group-item"
                  >
                    {" "}
                    {todo.completed ? (
                      <FaEnvelopeCircleCheck size={35} fill="green" />
                    ) : (
                      <MdPendingActions size={35} fill="red" />
                    )}
                    {todo.completed ? (
                      <Text
                        marginLeft={2}
                        textDecorationLine={"line-through"}
                        alignSelf={"center"}
                        fontSize={"large"}
                        textTransform={"capitalize"}
                        fontWeight={"bold"}
                        marginBottom={0}
                        paddingBottom={0}
                        color={"grey"}
                      >
                        {todo.title}
                      </Text>
                    ) : (
                      <Text
                        marginLeft={2}
                        alignSelf={"center"}
                        fontSize={"large"}
                        textTransform={"capitalize"}
                        fontWeight={"bold"}
                        marginBottom={0}
                        paddingBottom={0}
                        color={"red"}
                      >
                        {todo.title}
                      </Text>
                    )}
                  </ListItem>
                );
              })}
            </React.Fragment>
          ))}
        </UnorderedList>
      )}
      <HStack marginTop={2} justifyContent={"center"}>
        <Button
          onClick={() => fetchNextPage()}
          colorScheme="blue"
          disabled={isFetchingNextPage}
        >
          Load More
        </Button>
      </HStack>
    </div>
  );
};

export default Todos;
