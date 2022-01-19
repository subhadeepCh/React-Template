/* eslint-disable no-unused-vars */
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./counter.reducer";
import counterPersistReducer from "./counterPersist.reducer";
import counterComposerReducer from "./counterComposer.reducer";
import storageSession from "redux-persist/lib/storage/session";
import dataReducer from "./data.reducer";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["persistCounter"],
};

const rootReducer = combineReducers({
  counter: counterReducer,
  persistCounter: counterPersistReducer,
  specialCounter: counterComposerReducer,
  data: dataReducer
});

export default persistReducer(persistConfig, rootReducer);
