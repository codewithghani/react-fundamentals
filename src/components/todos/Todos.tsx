import useTodos from "../../../hooks/useTodos";
import {
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
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
const Todos = () => {
  const pageSize = 10;
  // const [userId, setUserId] = useState<number>(0);
  const {
    data: pages,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
  } = useTodos({ pageSize });
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
      <FormControl
        marginBottom={3}
        border="1px solid teal"
        padding={3}
        borderRadius={15}
        backgroundColor={"white"}
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
            type="text"
            border={"1px solid teal"}
            color={"green"}
            fontSize={"large"}
          />
          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
        </HStack>
      </FormControl>
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
