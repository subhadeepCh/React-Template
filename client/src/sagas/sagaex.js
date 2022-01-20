import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  calculateSuccess,
  calculateSuccess2,
  sendAmount2,
} from "../redux/actions/lossofPayAction";
import axios from "axios";

const callApi = (days) =>
  axios({
    method: "get",
    url: "http://localhost:5000/calculateAmt",
    params: {
      numOfDays: days,
    },
  });

function* handleExample1Data(action) {
  // TRY
  try {
    const response = yield call(callApi, action.payload);
    yield put(calculateSuccess(response.data?.amount || 0));
  } catch (err) {
    console.log("Error1", err);
  }
}
export function* watchForEXAMPLE1Start() {
  yield takeLatest("CALCULATE_AMT", handleExample1Data);
}

// correct implementation
function* handleExample2Data(action) {
  // TRY
  try {
    const response = yield call(callApi, action.payload);
    yield put(calculateSuccess2(response.data?.amount));
    const currentAmt = yield select((state) => state.lop2.currentAmt);
    const calculatedAmt = yield select((state) => state.lop2.calculatedAmt);
    yield put(sendAmount2(currentAmt + calculatedAmt));
  } catch (err) {
    console.log("Error2", err);
  }
}
export function* watchForEXAMPLE2Start() {
  yield takeLatest("CALCULATE_AMT2", handleExample2Data);
}
