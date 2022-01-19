const INITIAL_STATE = {
  key: "Value : ",
  count: 0,
};

const counterPersistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT_PERSIST":
      return { ...state, count: state.count + 1 };
    case "DECREMENT_PERSIST":
      return { ...state, count: state.count - 1 };
    case "RESET_PERSIST":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default counterPersistReducer;
