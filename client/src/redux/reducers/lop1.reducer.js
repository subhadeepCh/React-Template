const INITIAL_STATE = {
  loading: false,
  currentAmt: 13051,
  calculatedAmt: 0,
  sentAmt: "NA",
};

const lossOfPayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CALCULATE_AMT":
      return { ...state, loading: true };
    case "CALCULATE_SUCCESS":
      return { ...state, loading: false, calculatedAmt: action.payload };
    case "SEND_AMT":
      return { ...state, sentAmt: action.payload };;
    default:
      return state;
  }
};

export default lossOfPayReducer;
