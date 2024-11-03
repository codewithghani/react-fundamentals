type updateAction = {
  type: "increment" | "decrement";
  payload: number;
};
type resetAction = {
  type: "reset";
};
type CounterAction = updateAction | resetAction;

type CounterState = {
  count: number;
};

const CounterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

export default CounterReducer;
