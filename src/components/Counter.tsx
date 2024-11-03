import { Badge, Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { useReducer } from "react";

const Counter = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, counterone: state.counterone + 1 };
      case "DECREMENT":
        return { ...state, counterone: state.counterone - 1 };
      case "INCREMENT2":
        return { ...state, countertwo: state.countertwo + 1 };
      case "DECREMENT2":
        return { ...state, countertwo: state.countertwo - 1 };
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, {
    counterone: 0,
    countertwo: 10,
  });
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
            {count.counterone}
          </Badge>
        </HStack>
        <HStack>
          <Button
            variant={"outline"}
            colorScheme="green"
            marginRight={3}
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            Increment
          </Button>
          <Button
            variant={"outline"}
            colorScheme="red"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            Decrement
          </Button>
        </HStack>
      </Flex>
      <Flex
        border={"1px solid dodgerblue"}
        direction={"column"}
        align={"center"}
        background={"grey"}
      >
        <HStack>
          <Text fontSize={"4xl"}>Counter Two: </Text>
          <Badge paddingX={4} fontSize={"3xl"} colorScheme="teal">
            {count.countertwo}
          </Badge>
        </HStack>
        <HStack>
          <Button
            variant={"outline"}
            colorScheme="green"
            marginRight={3}
            onClick={() => dispatch({ type: "INCREMENT2" })}
          >
            Increment
          </Button>
          <Button
            variant={"outline"}
            colorScheme="red"
            onClick={() => dispatch({ type: "DECREMENT2" })}
          >
            Decrement
          </Button>
        </HStack>
      </Flex>
    </>
  );
};

export default Counter;
