const INITIAL_STATE = {
  loading: false,
  calculatedAmt: 0,
  currentAmt: 13051,
  sentAmt: "NA",
};

const lossOfPayReducer2 = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CALCULATE_AMT2":
      return { ...state, loading: true };
    case "CALCULATE_SUCCESS2":
      return { ...state, loading: false, calculatedAmt: action.payload };
    case "SEND_AMT2":
      return { ...state, sentAmt: action.payload };
    default:
      return state;
  }
};

export default lossOfPayReducer2;
