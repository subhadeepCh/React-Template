import { all, fork } from "redux-saga/effects";
import * as DataSaga from "./data.saga";

export default function* rootSagas() {
  yield all(
    [
      ...Object.values(DataSaga),
      // () => namedSaga()
    ].map(fork)
  );
}
