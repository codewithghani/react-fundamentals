import useTodos from "../../../hooks/useTodos";
import { Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { MdPendingActions } from "react-icons/md";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";

const Todos = () => {
  const { data: todos, isLoading, error } = useTodos();
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
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {todos && (
        <UnorderedList className="list-group">
          {todos.map((todo) => (
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
          ))}
        </UnorderedList>
      )}
    </div>
  );
};

export default Todos;
