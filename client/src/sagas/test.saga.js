import { takeEvery } from "redux-saga/effects";

// eslint-disable-next-line no-unused-vars
export function* handleThatSomething(action) {
  // TRY
}
export function* watchForSomethingStart() {
  yield takeEvery("SOMETHING", handleThatSomething);
}
