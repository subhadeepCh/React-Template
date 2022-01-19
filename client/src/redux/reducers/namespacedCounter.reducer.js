const INITIAL_STATE = {
  key: "Count : ",
  count: 0,
};

const namespacedCounterReducer = namespace => (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${namespace}@@@INCREMENT`:
      return { ...state, count: state.count + 1 };
    case `${namespace}@@@DECREMENT`:
      return { ...state, count: state.count - 1 };
    case `${namespace}@@@RESET`:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default namespacedCounterReducer;
