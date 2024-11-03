import React, { useReducer } from "react";
import tasksReducer from "./reducers/tasksReducer";
import { Badge, Button, List, ListItem } from "@chakra-ui/react";

const TasksList = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <>
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
            borderRadius={3}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems="center"
            backgroundColor={"teal"}
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
