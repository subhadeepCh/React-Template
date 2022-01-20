/* eslint-disable no-unused-vars */
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./counter.reducer";
import counterPersistReducer from "./counterPersist.reducer";
import counterComposerReducer from "./counterComposer.reducer";
import storageSession from "redux-persist/lib/storage/session";
import dataReducer from "./data.reducer";
import lossOfPayReducer from "./lop1.reducer";
import lossOfPayReducer2 from "./lop2.reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["persistCounter"],
};

const rootReducer = combineReducers({
  counter: counterReducer,
  persistCounter: counterPersistReducer,
  specialCounter: counterComposerReducer,
  data: dataReducer,
  lop1: lossOfPayReducer,
  lop2: lossOfPayReducer2
});

export default persistReducer(persistConfig, rootReducer); //returns an enhanced reducer
