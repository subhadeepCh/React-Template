import { all, fork } from "redux-saga/effects";
import * as DataSaga from "./data.saga";
import * as lopSaga from "./sagaex";

export default function* rootSagas() {
  yield all(
    [
      ...Object.values(DataSaga),
      ...Object.values(lopSaga),
      // () => namedSaga()
    ].map(fork)
  );
}
