import { createStore, applyMiddleware, compose } from "redux";
import logger from "./middleware/logger";
import thunk from "./middleware/thunk";
import rootReducer from "../reducers/index";

const initialState = {};
// const store = createStore(
//   rootReducer,
//   initialState,
//   applyMiddleware(logger, thunk)
// );
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(/*logger,*/ thunk))
);

export default store;
