import { takeLatest, call, put } from "redux-saga/effects";
import { fetchSuccess } from "../redux/actions/data.action";
import axios from "axios";

const callApi = () =>
  axios({
    method: "get",
    url: "http://localhost:5000/getName",
  });

function* handleFetchData(action) {
  // TRY
  try {
    const response = yield call(callApi);
    yield put(fetchSuccess(response.data?.name));
  } catch (err) {
    console.log("Error", err);
  }
}
export default function* watchForFetchDataStart() {
  yield takeLatest("FETCH_DATA", handleFetchData);
}
