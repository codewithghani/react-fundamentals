import { Badge, Box, Button, HStack, Text } from "@chakra-ui/react";
import { useReducer } from "react";

interface ADDIncrement {
  type: string;
}
interface ADDDecrement {
  type: string;
}
type Action = ADDIncrement | ADDDecrement;
const Counter = () => {
  const reducer = (state: number, action) => {
    switch (action) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <Box>
      <HStack>
        <Text fontSize={"4xl"}>Counter</Text>
        <Badge paddingX={4} fontSize={"3xl"} colorScheme="teal">
          {count}
        </Badge>
      </HStack>
      <Button
        variant={"outline"}
        colorScheme="green"
        marginRight={3}
        onClick={() => dispatch("INCREMENT")}
      >
        Increment
      </Button>
      <Button
        variant={"outline"}
        colorScheme="red"
        onClick={() => dispatch("DECREMENT")}
      >
        Decrement
      </Button>
    </Box>
  );
};

export default Counter;
