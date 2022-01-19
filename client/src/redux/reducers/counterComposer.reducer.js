/* eslint-disable no-unused-vars */
import { combineReducers } from "redux";
import namespacedCounterReducer from "./namespacedCounter.reducer";

const counterComposerReducer = combineReducers({
  leftCounter: namespacedCounterReducer("LEFT_COUNTER"),
  rightCounter: namespacedCounterReducer("RIGHT_COUNTER")
});

export default counterComposerReducer;
