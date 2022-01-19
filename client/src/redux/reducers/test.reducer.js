const INITIAL_STATE = {
  test: "test",
};
// eslint-disable-next-line no-unused-vars
const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "someting":
      return INITIAL_STATE;
    default:
      return INITIAL_STATE;
  }
};

export default testReducer;
