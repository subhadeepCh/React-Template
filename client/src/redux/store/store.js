import { applyMiddleware, compose, createStore } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootSagas from "../../sagas/root-saga";
import rootReducer from "../reducers/root-reducer";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__({
          trace: true,
          name: "REACT_TEMPLATE",
        })
      )
    : applyMiddleware(...middlewares)
);
sagaMiddleware.run(rootSagas);
export const persistor = persistStore(store);

const storeObject = { store, persistor }

export default storeObject;
