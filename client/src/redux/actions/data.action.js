export const fetchData = () => ({
  type: "FETCH_DATA",
});

export const fetchSuccess = data => ({
  type: "FETCH_SUCCESS",
  payload: data
});

export const resetData = () =>({
    type: "RESET_DATA"
})
