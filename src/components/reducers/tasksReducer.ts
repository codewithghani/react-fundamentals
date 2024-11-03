type Task = {
  id: number;
  title: string;
};

type AddTask = {
  type: "ADD_TASK";
  task: Task;
};

type DeleteTask = {
  type: "DELETE_TASK";
  taskId: number;
};
type TaskAction = AddTask | DeleteTask;
const tasksReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [action.task, ...state];
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.taskId);
    default:
      return state;
  }
};

export default tasksReducer;
