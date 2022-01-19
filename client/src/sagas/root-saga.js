import { all, fork } from "redux-saga/effects";
import * as TestSaga from "./test.saga";

export default function* rootSagas() {
  yield all(
    [
      ...Object.values(TestSaga),
      // () => namedSaga()
    ].map(fork)
  );
}
