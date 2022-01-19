const INITIAL_STATE = {
  loading: false,
  data: "",
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "RESET_DATA":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default dataReducer;
