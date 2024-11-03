import { Badge, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { useReducer } from "react";
import CounterReducer from "./reducers/CounterReducer";
const initialState = {
  count: 0,
};
const Counter = () => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);

  return (
    <>
      <Flex
        border={"1px solid teal"}
        direction={"column"}
        align={"center"}
        marginBottom={4}
      >
        <HStack>
          <Text fontSize={"4xl"}>Counter One: </Text>
          <Badge paddingX={4} fontSize={"3xl"} colorScheme="teal">
            {state.count}
          </Badge>
        </HStack>
        <HStack>
          <Button
            variant={"outline"}
            colorScheme="green"
            marginRight={3}
            onClick={() => dispatch({ type: "increment", payload: 3 })}
          >
            Increment
          </Button>
          <Button
            variant={"outline"}
            colorScheme="red"
            onClick={() => dispatch({ type: "decrement", payload: 3 })}
          >
            Decrement
          </Button>
          <Button
            variant={"outline"}
            colorScheme="red"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </Button>
        </HStack>
      </Flex>
    </>
  );
};

export default Counter;
