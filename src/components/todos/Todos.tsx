import useTodos from "../../../hooks/useTodos";
import {
  Checkbox,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
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
              key={todo.id}
              className="list-group-item"
            >
              {" "}
              {todo.completed ? (
                <Checkbox colorScheme="green" defaultChecked color={"green"}>
                  Completed
                </Checkbox>
              ) : (
                <Checkbox colorScheme="red" color={"red"}>
                  Pending
                </Checkbox>
              )}
              {todo.completed ? (
                <Text
                  marginLeft={2}
                  textDecorationLine={"line-through"}
                  alignSelf={"center"}
                >
                  {todo.title}
                </Text>
              ) : (
                <Text marginLeft={2} alignSelf={"center"}>
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
