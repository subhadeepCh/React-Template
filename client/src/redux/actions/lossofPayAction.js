export const calculateAmount = (data) => ({
  type: "CALCULATE_AMT",
  payload: data,
});

export const calculateSuccess = (data) => ({
  type: "CALCULATE_SUCCESS",
  payload: data,
});

export const sendAmount = (data) => ({
  type: "SEND_AMT",
  payload: data,
});

// alternate implementation
export const calculateAmount2 = (data) => ({
  type: "CALCULATE_AMT2",
  payload: data,
});

export const calculateSuccess2 = (data) => ({
  type: "CALCULATE_SUCCESS2",
  payload: data,
});

export const sendAmount2 = (data) => ({
  type: "SEND_AMT2",
  payload: data,
});
