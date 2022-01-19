const INITIAL_STATE = {
  key: "Count : ",
  count: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default counterReducer;
