import React, { useReducer } from "react";
import tasksReducer from "./reducers/tasksReducer";
import { Badge, Box, Button, List, ListItem } from "@chakra-ui/react";
import useWeather from "../../hooks/useWeather";
const TasksList = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  const { data, refetch, error } = useWeather();
  console.log(data);
  return (
    <>
      <Box>
        <Badge>{data?.clouds.all}</Badge>
      </Box>
      <Button
        variant={"outline"}
        onClick={() =>
          dispatch({
            type: "ADD_TASK",
            task: { id: Date.now(), title: "Title" + Date.now() },
          })
        }
      >
        Add Task
      </Button>
      {tasks.map((t) => (
        <List>
          <ListItem
            key={t.id}
            border={"2px solid tomato"}
            borderRadius={10}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems="center"
            backgroundColor={"teal"}
            paddingX={3}
            paddingY={3}
          >
            <Badge fontSize={"3xl"} marginRight={4} marginTop={2}>
              {t.title}
            </Badge>
            <Button
              variant={"outline"}
              colorScheme="red"
              onClick={() => dispatch({ type: "DELETE_TASK", taskId: t.id })}
            >
              Delete
            </Button>
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default TasksList;
